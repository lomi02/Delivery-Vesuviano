document.addEventListener('DOMContentLoaded', function () {
  // Chiamata alla funzione per chiudere la sidebar quando la pagina è completamente caricata
  closeSidebar();
});

function toggleSidebar() {
  let sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

function closeSidebar() {
  let sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("active");
}

window.addEventListener('beforeunload', function () {
  // Chiudi la sidebar prima di scaricare la pagina
  closeSidebar();
});

function openCart() {
  // Logica per aprire il carrello
  console.log("Apri il carrello");
}

function openAccount() {
  // Logica per aprire l'account
  console.log("Apri l'account");
}
function gestisciMetodoPagamento() {
  var metodoPagamento = document.getElementById("metodo-pagamento").value;
  var informazioniCarta = document.getElementById("informazioni-carta");

  // Mostra/nascondi i campi sulla carta di credito in base alla scelta dell'utente
  if (metodoPagamento === "carta") {
    informazioniCarta.style.display = "block";
  } else {
    informazioniCarta.style.display = "none";
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
  let metodoPagamento = document.getElementById("metodo-pagamento").value;

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

    // Aggiorna l'UI con i dati ottenuti
    aggiornaGrigliaLocali(locali);
  }
  catch (error) {
    console.error('Errore nel recupero dei dati del locale:', error);
  }

  // Fetch and display cuisine options
  await fetchCuisineOptions();

  // Toggle the sidebar after fetching data
  toggleSidebar();

  // Altri eventi e funzionalità possono essere aggiunti qui
  // ...
});

// Funzione per gestire il recupero delle opzioni di cucina
async function fetchCuisineOptions() {
  try {
    // Effettua una chiamata API per ottenere le opzioni di cucina
    const response = await fetch('http://localhost:3000/api/cuisines');
    const cuisines = await response.json();

    // Popola il filtro di cucina nel DOM
    const cuisineFilter = document.getElementById('cuisine-filter');
    cuisineFilter.innerHTML = ''; // Pulisce eventuali opzioni preesistenti
    cuisines.forEach(cuisine => {
      const option = document.createElement('option');
      option.value = cuisine.id;
      option.textContent = cuisine.name;
      cuisineFilter.appendChild(option);
    });
  } catch (error) {
    console.error('Errore durante il recupero delle opzioni di cucina:', error);
  }
}

// Funzione per gestire il recupero e la visualizzazione dei ristoranti
async function fetchAndDisplayRestaurants() {
  try {
    // Effettua una chiamata API per ottenere i dati dei ristoranti
    const response = await fetch('http://localhost:3000/api/locale');
    const restaurants = await response.json();

    // Aggiorna la griglia dei ristoranti nel DOM
    aggiornaGrigliaLocali(restaurants);
  } catch (error) {
    console.error('Errore durante il recupero e la visualizzazione dei ristoranti:', error);
  }
}

// Funzione per aggiornare la griglia dei ristoranti nel DOM
function aggiornaGrigliaLocali(locali) {
  const localeGrid = document.getElementById('restaurant-grid');
  localeGrid.innerHTML = ''; // Pulisce eventuali elementi preesistenti

  locali.forEach(locale => {
    const localeCard = creaCartaLocale(locale);
    localeGrid.appendChild(localeCard);
  });
}

// Funzione per creare una card di ristorante nel DOM
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
  const restaurantDetails = document.getElementById('restaurant-details');
  restaurantDetails.innerHTML = ''; // Pulisce eventuali dettagli preesistenti

  // Aggiungi dettagli del locale al lato destro
  const nameElement = document.createElement('h2');
  nameElement.textContent = locale.NOME_LOCALE;

  const cuisineElement = document.createElement('p');
  cuisineElement.textContent = `Cucina: ${locale.TIPO_PRODOTTO || 'N/A'}`;

  // Aggiungi ulteriori dettagli secondo necessità

  // Aggiungi elementi al lato destro
  restaurantDetails.appendChild(nameElement);
  restaurantDetails.appendChild(cuisineElement);

  // Mostra il lato destro con i dettagli del locale
  restaurantDetails.style.display = 'block';
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");
}
