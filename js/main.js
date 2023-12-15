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
  let metodoPagamento = document.getElementById("metodo-pagamento").value;
  if (via === undefined || via.trim() === '') {
    alert('Il campo "via" è obbligatorio');
    return;
  }
  if (!nome || !cognome || !email || !password || !via || !citta || !cap || !citofono) {
    alert('Compila tutti i campi obbligatori.');
    return;
  }
  console.log('Valore di "via":', via);
  // Se il metodo di pagamento è la carta, recupera anche le informazioni sulla carta di credito
  let numeroCarta, scadenzaCarta, cvv;
  if (metodoPagamento === "carta") {
    numeroCarta = document.getElementById("numero-carta").value;
    scadenzaCarta = document.getElementById("scadenza-carta").value;
    cvv = document.getElementById("cvv").value;
  }

  // Crea un oggetto con i dati dell'utente
  let utente = {
    nome,
    cognome,
    email,
    password,
    indirizzoConsegna: {
      via,
      citta,
      cap,
      citofono
    },
    metodoPagamento: {
      tipo: metodoPagamento,
      numeroCarta,
      scadenzaCarta,
      cvv
    }
  };
  try {
    // Effettua una richiesta di registrazione al tuo backend (sostituisci con l'URL corretto)
    const response = await fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(utente),
    });

    if (response.status === 201) {
      console.log('Utente registrato con successo');
      //window.location.href = 'RegSuccess.html';//
    } else {
      const data = await response.json();
      console.error('Errore durante la registrazione dell\'utente:', data.message);
    }
  } catch (error) {
    console.error('Errore durante la registrazione dell\'utente:', error);
  }
}


// Funzione per gestire il metodo di pagamento
function gestisciMetodoPagamento() {
  let metodoPagamento = document.getElementById("metodo-pagamento").value;
  let informazioniCarta = document.getElementById("informazioni-carta");
document.addEventListener('DOMContentLoaded', async function () {
  try {
    // Chiamata al backend per ottenere i dati dei locali
    const response = await fetch('http://localhost:3000/api/locale');
    const locali = await response.json();

    // Mostra/nascondi i campi sulla carta di credito in base alla scelta dell'utente
    if (metodoPagamento === "carta") {
      informazioniCarta.style.display = "block";
    } else {
      informazioniCarta.style.display = "none";
    }
  }

async function mostraLocali() {
  try {
    const response = await fetch('http://localhost:3000/api/locale');
    const locali = await response.json();
    aggiornaGrigliaLocali(locali);
  } catch (error) {
    console.error('Errore durante il recupero e la visualizzazione dei ristoranti:', error);
  }
}

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

function navigate(url)
{
  window.location.href = url;
}
