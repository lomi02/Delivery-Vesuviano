document.addEventListener('DOMContentLoaded', async function () {
  try {

    // Chiamata al backend per ottenere i dati dei locali
    const response = await fetch('http://localhost:3000/api/locale');
    const locali = await response.json();

    console.log('Dati ottenuti:', locali); // Aggiungi questo per verificare i dati

    // Aggiorna l'UI con i dati ottenuti
    aggiornaGrigliaLocali(locali);

  }
  catch (error) {
    console.error('Errore nel recupero dei dati del locale:', error);
  }
});

// Funzione per gestire la registrazione dell'utente
function registrati() {
  console.log('Funzione registrati chiamata');

  const formData = {
    nome: document.getElementById('nome').value,
    cognome: document.getElementById('cognome').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    via: document.getElementById('via').value,
    citta: document.getElementById('citta').value,
    cap: document.getElementById('cap').value,
    citofono: document.getElementById('citofono').value
  };

  console.log('Dati inviati:', formData);

  fetch('http://localhost:63343/untitled/register.html', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(response => response.json())
    .then(data => {
      console.log('Risposta dal server:', data);
    })
    .catch(error => {
      console.error('Errore durante la richiesta al server:', error);
    });
}

// Funzione per gestire il metodo di pagamento
function gestisciMetodoPagamento() {
  let metodoPagamento = document.getElementById("metodo-pagamento").value;
  let informazioniCarta = document.getElementById("informazioni-carta");

  // Mostra/nascondi i campi sulla carta di credito in base alla scelta dell'utente
  if (metodoPagamento === "carta") {
    informazioniCarta.style.display = "block";
  } else {
    informazioniCarta.style.display = "none";
  }
}

async function mostraLocali() {
  try {
    // Effettua una richiesta di registrazione al tuo backend (sostituisci con l'URL corretto)
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(utente),
    });

    if (response.status === 201) {
      console.log('Utente registrato con successo');
    } else {
      const data = await response.json();
      console.error('Errore durante la registrazione dell\'utente:', data.message);
    }
  } catch (error) {
    console.error('Errore durante la registrazione dell\'utente:', error);
  }
}
document.addEventListener('DOMContentLoaded', async function () {
  try {
    // Chiamata al backend per ottenere i dati dei locali
    const response = await fetch('http://localhost:3000/api/locale');
    const locali = await response.json();
    aggiornaGrigliaLocali(locali);
  } catch (error) {
    console.error('Errore durante il recupero e la visualizzazione dei ristoranti:', error);
  }
});

// Funzione per aggiornare la griglia dei locali
function aggiornaGrigliaLocali(locali) {
  const localeGrid = document.getElementById('contenitore-locale');
  localeGrid.innerHTML = ''; // Pulisce eventuali elementi preesistenti

  locali.forEach(locale => {
    const localeCard = creaCartaLocale(locale);
    localeCard.addEventListener('click', () => mostraDettagliLocale(locale));
    localeGrid.appendChild(localeCard);
  });
}

// Funzione per creare schede di locali
function creaCartaLocale(locale) {
  const card = document.createElement('div');
  card.classList.add('locale-card');

  // Aggiungi dettagli del locale alla card
  const nameElement = document.createElement('h2');
  nameElement.textContent = locale.NOME_LOCALE;

  const cuisineElement = document.createElement('p');
  cuisineElement.textContent = `Cucina: ${locale.TIPO_PRODOTTO || 'N/A'}`;

  // Aggiungi ulteriori dettagli secondo necessità

  // Aggiungi elementi alla card
  card.appendChild(nameElement);
  card.appendChild(cuisineElement);

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
  nameElement.textContent = locale.NOME_LOCALE;

  const cuisineElement = document.createElement('p');
  cuisineElement.textContent = `Cucina: ${locale.TIPO_PRODOTTO || 'N/A'}`;
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
      body: JSON.stringify({ email, password }),
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
function navigate(url) {
  window.location.href = url;
}
