// Operazioni Database
const oracledb = require('oracledb');
const dbConfig = require('js/dbConfig');

async function fetchRestaurantData() {
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    const query = 'SELECT * FROM restaurants';
    const result = await connection.execute(query);

    return result.rows;
  } catch (error) {
    console.error('Error fetching restaurant data:', error);
    throw error; // Propagate the error to the caller
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (error) {
        console.error('Error closing database connection:', error);
      }
    }
  }
}

module.exports = {
  fetchRestaurantData,
  // Add more functions for other database operations
};
