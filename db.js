// Import the D1 library (if required)
// const D1 = require('d1-sdk'); // Uncomment if using a library

// Bind to the database
const db = D1.getDatabase('your-database-name'); // Replace 'your-database-name' with the actual name of your D1 database

// Function to test the database connection
async function testBinding() {
    try {
        const result = await db.query('SELECT * FROM your_table_name'); // Replace 'your_table_name' with an actual table name
        console.log('Database query result:', result);
    } catch (error) {
        console.error('Error connecting to the database:', error);
    }
}

// Export the database and functions for use in other files
module.exports = {
    db,
    testBinding
};