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

  // Aggiungi un gestore di eventi per aprire i dettagli del locale al clic
  card.addEventListener('click', () => mostraDettagliLocale(locale));

  return card;
}

// Funzione per mostrare i dettagli del locale
function mostraDettagliLocale(locale) {
  const dettagliLocale = document.getElementById('dettagli-locale');
  dettagliLocale.innerHTML = '';

  // Aggiungi dettagli del locale al lato destro
  const nameElement = document.createElement('h2');
  nameElement.textContent = locale.NOME_RISTORANTE;

  // Aggiungi pulsante Home
  const homeButton = document.createElement('button-dettagli');
  homeButton.textContent = 'Home';
  homeButton.addEventListener('click', () => navigate('index.html'));
  homeButton.style.top = "195px";
  homeButton.style.left = "90px";

  // Aggiungi pulsante Acquista
  const buyButton = document.createElement('button-dettagli');
  buyButton.textContent = 'Acquista';
  buyButton.addEventListener('click', () => navigate('carrello.html'));
  buyButton.style.top = "250px";
  buyButton.style.left = "80px";

  dettagliLocale.appendChild(nameElement);
  dettagliLocale.appendChild(homeButton);
  dettagliLocale.appendChild(buyButton);

  // Nascondi altre schede e mostra la scheda dei locali
  document.getElementById('griglia-ristoranti').style.display = 'none';

  // Mostra la sezione dei dettagli del locale con animazione
  dettagliLocale.style.display = 'block';
  dettagliLocale.style.transform = 'translateY(0)';
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
