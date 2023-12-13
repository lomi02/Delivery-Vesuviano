const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = 3000;
const path = require('path');
const dbPath = path.join(__dirname, '../identifier.sqlite');

app.use(cors());

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Errore nella connessione al database', err.message);
  } else {
    console.log('Connessione al database riuscita');
  }
});

// API di fetching di informazioni dei locali
app.get('/api/locale', (req, res) => {
  db.all('SELECT * FROM LOCALE', (err, rows) => {
    if (err) {
      console.error('Errore durante la query al database', err.message);
      res.status(500).json({ error: 'Internal Server Error', details: err.message });
    } else {
      console.log('Dati restituiti correttamente:', rows);
      res.json(rows);
    }
  });
});

// API di Registrazione
app.post('/api/register', (req, res) => {
  const { nome, cognome, email, password, via, citta, cap, citofono } = req.body;

  // Esecuzione dell'istruzione SQL di INSERT per aggiungere un nuovo utente
  const insertClienteQuery = `
    INSERT INTO CLIENTE (NOME_CLIENTE, COGNOME_CLIENTE, EMAIL, PASSWORD)
    VALUES (?, ?, ?, ?)
  `;

  const insertInformazioniConsegnaQuery = `
    INSERT INTO INFORMAZIONI_CONSEGNA (EMAIL_CLIENTE, VIA_CLIENTE, CITTA_CLIENTE, CAP_CLIENTE, CITOFONO)
    VALUES (?, ?, ?, ?, ?)
  `;
  const beginTransaction = 'BEGIN TRANSACTION';
  const commitTransaction = 'COMMIT';

  try {
    // Inizia la transazione
    db.run(beginTransaction);

    // Inserisci dati in CLIENTE
    db.run(insertClienteQuery, [nome, cognome, email, password]);

    // Inserisci dati in INFORMAZIONI_CONSEGNA
    db.run(insertInformazioniConsegnaQuery, [email, via, citta, cap, citofono]);

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
  finally {
    // Chiudi la connessione al database
    db.close();
  }
});

// API di Login
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Esecuzione dell'istruzione SQL per verificare le credenziali
  const loginQuery = `
    SELECT * FROM CLIENTE
    WHERE EMAIL = ? AND PASSWORD = ?
  `;

  db.get(loginQuery, [email, password], (err, row) => {
    if (err) {
      console.error('Errore durante la query di login:', err.message);
      res.status(500).json({ error: 'Internal Server Error', details: err.message });
    } else if (row) {
      // Utente autenticato
      console.log('Login avvenuto con successo:', row);
      res.status(200).json({ message: 'Login avvenuto con successo', user: row });
    } else {
      // Credenziali non valide
      console.log('Credenziali non valide');
      res.status(401).json({ error: 'Credenziali non valide' });
    }
  });
});

// Funzione per la verifica dello stato di login
function checkUserLoginStatus(email, password, callback) {

  // Esecuzione dell'istruzione SQL per verificare le credenziali
  const loginQuery = `
    SELECT * FROM CLIENTE
    WHERE EMAIL = ? AND PASSWORD = ?
  `;

  db.get(loginQuery, [email, password], (err, row) => {
    if (err) {
      console.error('Errore durante la query di login:', err.message);
      callback(false);
    } else if (row) {
      // Utente autenticato
      console.log('Login avvenuto con successo:', row);
      callback(true, row);
    } else {
      // Credenziali non valide
      console.log('Credenziali non valide');
      callback(false);
    }
  });
}

// Avvio del server
app.listen(port, () => {
  console.log(`Il server è in ascolto sulla porta ${port}`);
});
