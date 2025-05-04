// Load environment variables if .env file exists
require('dotenv').config();

module.exports = {
  // MongoDB connection for production or development
  mongoURI: process.env.MONGODB_URI || 'mongodb://localhost:27017/credikhaata',
  
  // Server port
  port: process.env.PORT || 5000,
  
  // JWT settings
  jwtSecret: process.env.JWT_SECRET || 'credikhaata_secret_key_change_in_production',
  jwtExpiry: process.env.JWT_EXPIRY || '7d',
  
  // Environment
  nodeEnv: process.env.NODE_ENV || 'development'
}; 