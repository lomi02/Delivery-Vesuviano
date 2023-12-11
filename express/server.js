const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors()); // Configurazione CORS

// Configurazione del database SQLite
const db = new sqlite3.Database('../identifier.sqlite', (err) => {
  if (err) {
    console.error('Errore nell\'apertura del database', err.message);
  } else {
    console.log('Connessione al database riuscita');
  }
});

// Gestione della richiesta per ottenere i ristoranti
app.get('/api/locale', (req, res) => {
  db.all('SELECT * FROM LOCALE', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error', details: err.message });
    } else {
      console.log('Dati restituiti correttamente:', rows);
      res.json(rows);
    }
  });
});

// Avvio del server
app.listen(port, () => {
  console.log(`Il server è in ascolto sulla porta ${port}`);
});
