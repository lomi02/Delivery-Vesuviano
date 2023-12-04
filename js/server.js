const express = require('express');
const oracledb = require('oracledb');
const dbConfig = require('/js/dbConfig'); // Make sure to provide the correct path to dbConfig

const app = express();
const PORT = 3000;

const cors = require('cors');
app.use(cors());

// Define a route to fetch locales
app.get('/api/locale', async (req, res) => {
  try {
    // Connect to Oracle DB
    const connection = await oracledb.getConnection(dbConfig);

    // Execute a simple query to fetch locales
    const result = await connection.execute('SELECT * FROM LOCALE');

    // Release the Oracle DB connection
    await connection.close();

    // Send the result as JSON
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching locales:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

