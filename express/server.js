const express = require('express');
const bodyParser = require('body-parser');
const oracledb = require('oracledb');
const bcrypt = require('bcrypt');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Database connection
async function initialize() {
  await oracledb.createPool({
    user: 'your_username',
    password: 'your_password',
    connectString: 'your_connect_string',
  });
}

initialize();

// Register endpoint
app.post('/api/register', async (req, res) => {
  const { username, email, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert user into the database
  try {
    const connection = await oracledb.getConnection();
    const result = await connection.execute(
      `INSERT INTO users (username, email, password) VALUES (:username, :email, :password)`,
      [username, email, hashedPassword]
    );
    connection.release();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  // Retrieve user from the database
  try {
    const connection = await oracledb.getConnection();
    const result = await connection.execute(
      'SELECT * FROM users WHERE username = :username',
      [username]
    );

    if (result.rows.length === 0) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }

    const user = result.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.PASSWORD);

    if (isPasswordValid) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }

    connection.release();
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
