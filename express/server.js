const express = require('express');
const sqlite3 = require('sqlite3').verbose();

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

  // Replace this with your actual database query logic
  db.get('SELECT * FROM CLIENTE WHERE EMAIL_CLIENTE = ? AND PASSWORD_CLIENTE = ?', [email, password], (err, row) => {
    if (err) {
      console.error(err);
      res.status(500).json({success: false, message: 'Internal Server Error'});
    } else {
      if (row) {
        res.json({success: true, message: 'Login successful'});
      } else {
        res.json({success: false, message: 'Invalid credentials'});
      }
    }
  });
});

// API di Registrazione
app.post('/api/register', (req, res) => {
  const { nome, cognome, email, password, via, citta, cap, citofono } = req.body;

  // Esecuzione dell'istruzione SQL di INSERT per aggiungere un nuovo utente
  const insertClienteQuery = `
    INSERT INTO CLIENTE (NOME_CLIENTE, COGNOME_CLIENTE, EMAIL_CLIENTE, PASSWORD_CLIENTE, VIA_CLIENTE, CITTA_CLIENTE, CAP_CLIENTE, CITOFONO_CLIENTE)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const beginTransaction = 'BEGIN TRANSACTION';
  const commitTransaction = 'COMMIT';

  try {
    // Inizia la transazione
    db.run(beginTransaction);

    // Inserisci dati in CLIENTE
    db.run(insertClienteQuery, [nome, cognome, email, password, via, citta, cap, citofono]);

    // Concludi la transazione
    db.run(commitTransaction);

    console.log('Registrazione avvenuta con successo');
    res.status(201).json({ message: 'Registrazione avvenuta con successo' });
  }
  catch (error) {
    // In caso di errore, esegui il rollback della transazione
    db.run('ROLLBACK');
    console.error('Errore durante la registrazione:', error);
    res.status(500).json({ message: 'Errore durante la registrazione' });
  }
});

// Avvio del server
app.listen(port, () => {
  console.log(`Il server è in ascolto sulla porta ${port}`);
});
