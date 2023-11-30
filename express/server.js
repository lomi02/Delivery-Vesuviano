const express = require('express');
const oracledb = require('oracledb');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Database connection configuration
const dbConfig = {
  user: 'your_username',
  password: 'your_password',
  connectString: 'your_connection_string',
};

// Database connection
oracledb.getConnection(dbConfig, (err, connection) => {
  if (err) {
    console.error(err.message);
    return;
  }

  console.log('Connected to Oracle Database');

  // Define your routes and interact with the database
  // Example route:
  app.get('/api/menu', async (req, res) => {
    try {
      const result = await connection.execute('SELECT * FROM menu_items');
      res.json(result.rows);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Internal Server Error');
    }
  });

  // Close the database connection when the server stops
  app.on('close', () => {
    connection.close((err) => {
      if (err) {
        console.error(err.message);
      }
      console.log('Connection closed');
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// In your server.js or app.js file
app.get('/api/restaurants', async (req, res) => {
  try {
    // Fetch and return a list of restaurants from the database
    const result = await database.query('SELECT * FROM restaurants');
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/api/restaurants/:restaurantId/menu', async (req, res) => {
  const restaurantId = req.params.restaurantId;
  try {
    // Fetch and return the menu for the specified restaurantId from the database
    const result = await database.query('SELECT * FROM menu WHERE restaurant_id = :id', [restaurantId]);
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// In your server.js or app.js file
app.post('/api/users/register', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    // Perform user registration logic and insert into the database
    // Hash the password before storing it for security
    const hashedPassword = await bcrypt.hash(password, 10);
    await database.query('INSERT INTO users (username, password, email) VALUES (:username, :password, :email)', {
      username,
      password: hashedPassword,
      email,
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.post('/api/users/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Perform user login logic (validate credentials against the database)
    // Generate and return a JWT token upon successful login
    const user = await database.query('SELECT * FROM users WHERE username = :username', [username]);

    if (!user || user.rows.length === 0) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.rows[0].id }, 'your-secret-key', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
