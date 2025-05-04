const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connection status endpoint
app.get('/api/status', (req, res) => {
  const states = ['disconnected', 'connected', 'connecting', 'disconnecting'];
  const dbState = states[mongoose.connection.readyState] || 'unknown';
  
  res.json({
    timestamp: new Date(),
    server: 'running',
    database: {
      state: dbState,
      connected: mongoose.connection.readyState === 1,
      host: mongoose.connection.host || 'unknown',
      name: mongoose.connection.name || 'unknown'
    }
  });
});

// Root route for API
app.get('/api', (req, res) => {
  res.json({
    message: 'Welcome to CrediKhaata API',
    version: '1.0.0'
  });
});

// Serve static files from the React frontend app in production
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../temp-frontend/build')));

  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../temp-frontend/build', 'index.html'));
  });
}

// Connect to MongoDB
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/credikhaata';
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5s
    });
    
    console.log('Connected to MongoDB');
    console.log(`Database: ${mongoURI}`);
    
    return true;
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    return false;
  }
};

// Handle MongoDB connection events
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to DB');
});

mongoose.connection.on('error', (err) => {
  console.error('Mongoose connection error:', err.message);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

// Graceful shutdown
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('Mongoose connection closed due to app termination');
  process.exit(0);
});

// Start server
const startServer = async () => {
  const isConnected = await connectDB();
  
  if (!isConnected) {
    console.error('Failed to connect to database. Exiting application...');
    process.exit(1);
  }
  
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
    console.log(`API available at http://localhost:${PORT}/api`);
    if (process.env.NODE_ENV === 'production') {
      console.log(`Frontend available at http://localhost:${PORT}`);
    }
  });
};

startServer(); 