const mongoose = require('mongoose');

/**
 * Initialize database - verify collections and create initial data
 */
async function initializeDatabase() {
  try {
    // List all collections in the database
    const collections = await mongoose.connection.db.listCollections().toArray();
    const collectionNames = collections.map(col => col.name);
    
    console.log('Existing collections:', collectionNames.join(', '));
    
    // Additional setup operations can be added here if needed
    // For example, checking and creating indexes
    
    return true;
  } catch (error) {
    console.error('Database initialization error:', error);
    return false;
  }
}

module.exports = initializeDatabase; 