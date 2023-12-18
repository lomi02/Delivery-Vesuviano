const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const crypto = require('crypto');
const bcrypt = require('bcrypt');

const cors = require('cors');
const bodyParser = require('body-parser');

const {Sequelize, QueryTypes} = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '../identifier.sqlite',
});

const app = express();
const port = 3000;
const path = require('path');
const dbPath = path.join(__dirname, '../identifier.sqlite');

app.use(cors());
app.use(bodyParser.json());

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Errore nella connessione al database', err.message);
  } else {
    console.log('Connessione al database riuscita');
  }
});

// API di fetching delle informazioni del cliente
app.get('/api/user/:tokenid', async (req, res) => {
  const tokenID = req.params.tokenid;
  console.log('User token:', tokenID); // Log the user token

  if (!tokenID) {
    console.log('Token non fornito');
    res.status(400).send('Token non fornito');
    return;
  }

  try {
    const query = `
      SELECT *
      FROM CLIENTE
             JOIN TOKEN ON CLIENTE.ID_CLIENTE = TOKEN.USER_ID
      WHERE TOKEN.TOKEN_ID = :tokenid;
    `;

    const result = await sequelize.query(query, {
      replacements: {tokenid: tokenID},
      type: QueryTypes.SELECT,
    });

    console.log('Query result:', result);

    if (result.length === 0) {
      console.log('Nessun dato utente trovato per questo token');
      res.status(404).send('Nessun dato utente trovato per questo token');
      return;
    }

    res.json(result);
  } catch (error) {
    console.error('Errore durante il recupero dei dati del cliente:', error);
    res.status(500).send(`Errore interno del server: ${error.message}`);
  }
});

// API di fetching di informazioni dei locali
app.get('/api/ristorante', (req, res) => {
  db.all('SELECT * FROM RISTORANTE', (err, rows) => {
    if (err) {
      console.error('Errore durante la query al database', err.message);
      res.status(500).json({error: 'Internal Server Error', details: err.message});
    } else {
      console.log('Dati restituiti correttamente:', rows);
      res.json(rows);
    }
  });
});

// API di fetching del menù
app.get('/api/menu/:id_ristorante', async (req, res) => {
  const idRistorante = req.params.id_ristorante;

  try {
    const query = `
      SELECT RISTORANTE.NOME_RISTORANTE, MENU.NOME_PIATTO, MENU.DESCRIZIONE, MENU.PREZZO, MENU.IMG_URL_PIATTO
      FROM RISTORANTE
             JOIN MENU ON RISTORANTE.P_IVA_RISTORANTE = MENU.RISTORANTE_ID
      WHERE RISTORANTE.P_IVA_RISTORANTE = :id_ristorante;
    `;

    const result = await sequelize.query(query, {
      replacements: {id_ristorante: idRistorante},
      type: QueryTypes.SELECT,
    });

    res.json(result);
  } catch (error) {
    console.error('Errore durante il recupero dei dati del menù:', error);
    res.status(500).send('Errore interno del server');
  }
});

// API di Login
app.post('/api/login', (req, res) => {
  const {email, password} = req.body;

  db.get('SELECT * FROM CLIENTE WHERE EMAIL_CLIENTE = ?', [email], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({success: false, message: 'Internal Server Error'});
    } else {
      if (row && bcrypt.compareSync(password, row.PASSWORD_CLIENTE)) {
        const token = crypto.randomBytes(64).toString('hex');
        const expirationTimestamp = Math.floor(Date.now() / 1000) + 60 * 30;
        db.run('INSERT INTO TOKEN (USER_ID, TOKEN_STRING, EXPIRATION_TIMESTAMP) VALUES (?, ?, ?)', [row.ID_CLIENTE, token, expirationTimestamp], (err) => {
          if (err) {
            console.error(err);
            res.status(500).json({success: false, message: 'Internal Server Error'});
          } else {
            res.json({success: true, message: 'Login successful', token: token});
          }
        });
      } else {
        res.json({success: false, message: 'Invalid credentials'});
      }
    }
  });
});

// Sistema di verifica di token
app.post('/api/verify-token', (req, res) => {
  const token = req.headers.authorization;
  console.log('Token from request:', token);

  db.get('SELECT * FROM TOKEN WHERE TOKEN_STRING = ?', [token], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({success: false, message: 'Internal Server Error'});
    } else {
      if (row && Math.floor(Date.now() / 1000) < row.EXPIRATION_TIMESTAMP) {
        db.get('SELECT * FROM CLIENTE INNER JOIN TOKEN ON CLIENTE.ID_CLIENTE = TOKEN.USER_ID WHERE TOKEN.TOKEN_STRING = ?', [token], (err, user) => {
          if (err) {
            console.error(err);
            res.status(500).json({success: false, message: 'Internal Server Error'});
          } else {
            res.json({success: true, user: user});
          }
        });
      } else {
        // Invia una risposta anche quando il token non è valido o è scaduto
        res.json({success: false, message: 'Invalid or expired token'});
      }
    }
  });
});

// Sistema middleware di Token
const ignorePaths = ['/api/register'];
app.use((req, res, next) => {
  // Se il percorso della richiesta corrente è nell'array dei percorsi da ignorare, passa al prossimo middleware
  if (ignorePaths.includes(req.path)) {
    next();
  } else {
    const token = req.headers['authorization'];

    if (!token) {
      res.status(401).json({success: false, message: 'No token provided'});
    } else {
      db.get('SELECT * FROM TOKEN WHERE TOKEN_STRING = ? AND EXPIRATION_TIMESTAMP > ?', [token, Math.floor(Date.now() / 1000)], (err, row) => {
        if (err) {
          console.error(err);
          res.status(500).json({success: false, message: 'Internal Server Error'});
        } else {
          if (row) {
            req.userId = row.USER_ID;
            next();
          } else {
            res.status(401).json({success: false, message: 'Invalid token'});
          }
        }
      });
    }
  }
});

// API di Registrazione
app.post('/api/register', (req, res) => {
  const {nome, cognome, email, password, via, citta, cap, citofono} = req.body;
  const saltRounds = 10;

  bcrypt.hash(password, saltRounds, (err, hashedPassword) => {
    if (err) {
      console.error('Errore durante l\'hashing della password:', err);
      res.status(500).json({message: 'Errore durante l\'hashing della password'});
    } else {
      const insertClienteQuery = `
        INSERT INTO CLIENTE (NOME_CLIENTE, COGNOME_CLIENTE, EMAIL_CLIENTE, PASSWORD_CLIENTE, VIA_CLIENTE, CITTA_CLIENTE,
                             CAP_CLIENTE, CITOFONO_CLIENTE)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;

      db.run(insertClienteQuery, [nome, cognome, email, hashedPassword, via, citta, cap, citofono], function (err) {
        if (err) {
          console.error('Errore durante la registrazione:', err);
          res.status(500).json({message: 'Errore durante la registrazione'});
        } else {
          console.log('Registrazione avvenuta con successo');
          res.status(201).json({message: 'Registrazione avvenuta con successo'});
        }
      });
    }
  });
});

// API per l'aggiornamento del campo password
app.post('/api/update/password', (req, res) => {
  let sql = `UPDATE CLIENTE SET PASSWORD_CLIENTE = ? WHERE ID_CLIENTE = ?`;
  db.run(sql, [req.body.password, req.body.userId], function(err) {
    if (err) {
      return console.error(err.message);
    }
    res.json({ success: true, message: 'Password Aggiornata con successo.' });
  });
});

// API per l'aggiornamento del campo email
app.post('/api/update/password', (req, res) => {
  let sql = `UPDATE CLIENTE SET EMAIL_CLIENTE = ? WHERE ID_CLIENTE = ?`;
  db.run(sql, [req.body.password, req.body.userId], function(err) {
    if (err) {
      return console.error(err.message);
    }
    res.json({ success: true, message: 'Email Aggiornata con successo.' });
  });
});

app.post('/api/update/address', (req, res) => {
  let sql = `UPDATE CLIENTE SET VIA_CLIENTE = ?, CITTA_CLIENTE = ?, CAP_CLIENTE = ?, CITOFONO_CLIENTE = ? WHERE ID_CLIENTE = ?`;
  db.run(sql, [req.body.via, req.body.citta, req.body.cap, req.body.citofono, req.body.userId], function(err) {
    if (err) {
      return console.error(err.message);
    }
    res.json({ success: true, message: 'Indirizzo Aggiornato con successo.' });
  });
});

app.post('/api/logout', (req, res) => {
  let sql = `DELETE FROM TOKEN WHERE USER_ID = ?`;
  db.run(sql, [req.body.userId], function(err) {
    if (err) {
      return console.error(err.message);
    }
    res.json({ success: true, message: 'Effettuato il Logout.' });
  });
});

app.delete('/api/delete', (req, res) => {
  let sql = `DELETE FROM CLIENTE WHERE ID_CLIENTE = ?`;
  db.run(sql, [req.body.userId], function(err) {
    if (err) {
      return console.error(err.message);
    }
    res.json({ success: true, message: 'Account Eliminato con Successo.' });
  });
});

// Avvio del server
app.listen(port, () => {
  console.log(`Il server è in ascolto sulla porta ${port}`);
});
