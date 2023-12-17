document.addEventListener('DOMContentLoaded', async function () {
  try {

    // Chiamata al backend per ottenere i dati dei locali
    const response = await fetch('http://localhost:3000/api/ristorante');
    const ristoranti = await response.json();

    console.log('Dati ottenuti:', ristoranti);

    // Aggiorna l'UI con i dati ottenuti
    aggiornaGrigliaRistoranti(ristoranti);

  } catch (error) {
    console.error('Errore nel recupero dei dati del ristorante:', error);
  }
});

async function fetchRistoranti() {
  try {
    const response = await fetch('http://localhost:3000/api/ristorante');
    const ristoranti = await response.json();
    aggiornaGrigliaRistoranti(ristoranti);

    // Nascondi altre schede e mostra la scheda dei ristoranti
    document.getElementById('griglia-ristoranti').style.display = 'block';

  } catch (error) {
    console.error('Errore durante il recupero e la visualizzazione dei ristoranti:', error);
  }
}

// Funzione per aggiornare la griglia dei locali
function aggiornaGrigliaRistoranti(ristoranti) {
  const grigliaRistoranti = document.getElementById('contenitore-locale');
  grigliaRistoranti.innerHTML = '';

  ristoranti.forEach(locale => {
    const localeCard = creaCartaLocale(locale);
    localeCard.addEventListener('click', () => mostraDettagliLocale(locale));
    grigliaRistoranti.appendChild(localeCard);
  });
}

// Funzione per creare schede di locali
function creaCartaLocale(locale) {
  const card = document.createElement('div');
  card.classList.add('locale-card');

  // Aggiungi immagine del locale alla card
  const imageElement = document.createElement('img');
  imageElement.src = locale.IMG_URL_RISTORANTE;

  // Aggiungi dettagli del locale alla card
  const nameElement = document.createElement('h2');
  nameElement.textContent = locale.NOME_RISTORANTE;

  // Aggiungi elementi alla card
  card.appendChild(imageElement);
  card.appendChild(nameElement);

  return card;
}

// Funzione per mostrare i dettagli del locale
async function mostraDettagliLocale(locale) {
  const dettagliLocale = document.getElementById('dettagli-locale');
  dettagliLocale.innerHTML = '';

  // Aggiungi dettagli del locale al lato destro
  const nameElement = document.createElement('h2');
  nameElement.textContent = locale.NOME_RISTORANTE;
  nameElement.classList.add('nome-locale');
  dettagliLocale.appendChild(nameElement);

  // Nascondi altre schede e mostra la scheda dei locali
  document.getElementById('griglia-ristoranti').style.display = 'none';

  // Mostra la sezione dei dettagli del locale con animazione
  dettagliLocale.style.display = 'block';
  dettagliLocale.style.transform = 'translateY(0)';

  // Fai una chiamata al tuo backend per ottenere il menù del ristorante
  const response = await fetch('http://localhost:3000/api/menu/' + locale.P_IVA_RISTORANTE);
  const menu = await response.json();

  // Aggiungi il menù al dettaglio del locale
  const menuElement = document.createElement('div');
  menuElement.classList.add('contenitore-menu');
  menu.forEach(item => {
    const itemElement = creaCartaPiatto(item);
    menuElement.appendChild(itemElement);
  });
  dettagliLocale.appendChild(menuElement);
}

// Funzione per creare schede di piatti
function creaCartaPiatto(piatto) {
  const card = document.createElement('div');
  card.classList.add('piatto-card');

  // Aggiungi immagine del piatto alla card
  const imageElement = document.createElement('img');
  imageElement.src = piatto.IMG_URL_PIATTO;

  // Aggiungi dettagli del piatto alla card
  const nameElement = document.createElement('h2');
  nameElement.textContent = piatto.NOME_PIATTO;

  const priceElement = document.createElement('p');
  priceElement.textContent = piatto.PREZZO.toFixed(2) + '€'; // Limita il prezzo a due cifre decimali

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = piatto.DESCRIZIONE;

  // Aggiungi pulsante Acquista
  const buyButton = document.createElement('button');
  buyButton.textContent = 'Acquista';
  buyButton.addEventListener('click', () => {
    // Aggiungi il piatto al carrello
    aggiungiAlCarrello(piatto);
  });

  // Aggiungi elementi alla card
  card.appendChild(imageElement);
  card.appendChild(nameElement);
  card.appendChild(priceElement);
  card.appendChild(descriptionElement);
  card.appendChild(buyButton);

  return card;
}

// Funzione per gestire il login
async function login() {
  try {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    });

    const result = await response.json();
    if (result.success) {
      alert('Login successful!');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
}

// Funzione per gestire la registrazione dell'utente
async function registrati() {

  // Recupera i valori dai campi del modulo di registrazione
  let nome = document.getElementById("nome").value;
  let cognome = document.getElementById("cognome").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let via = document.getElementById("via").value;
  let citta = document.getElementById("citta").value;
  let cap = document.getElementById("cap").value;
  let citofono = document.getElementById("citofono").value;
  if (!nome || !cognome || !email || !password || !via || !citta || !cap || !citofono) {
    alert('Compila tutti i campi obbligatori.');
    return;
  }

  // Crea un oggetto con i dati dell'utente
  let utente = {
    nome,
    cognome,
    email,
    password,
    via,
    citta,
    cap,
    citofono
  };
  try {

    // Effettua una richiesta di registrazione al tuo backend
    const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(utente),
    });

    if (response.status === 201) {
      console.log('Utente registrato con successo');
      window.location.href = 'RegSuccess.html';
    } else {
      const data = await response.json();
      console.error('Errore durante la registrazione dell\'utente:', data.message);
    }
  } catch (error) {
    console.error('Errore durante la registrazione dell\'utente:', error);
  }
}

function navigate(url) {
  window.location.href = url;
}
