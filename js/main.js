document.addEventListener('DOMContentLoaded', function () {
  // Chiamata alla funzione per chiudere la sidebar quando la pagina è completamente caricata
  closeSidebar();
});

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

  // Aggiungi eventi di apertura per carrello e account
  document.querySelector('.cart-icon').addEventListener('click', openCart);
  document.querySelector('.account-icon').addEventListener('click', openAccount);

  try {
    // Chiamata al backend per ottenere i dati dei locali
    const response = await fetch('http://localhost:3000/api/locale');
    const locali = await response.json();

    console.log('Dati ottenuti:', locali); // Aggiungi questo per verificare i dati

    // Aggiorna l'UI con i dati ottenuti
    aggiornaGrigliaLocali(locali);

    // Toggle della sidebar dopo il recupero dei dati
    toggleSidebar();

    // Altri eventi e funzionalità possono essere aggiunti qui
    // ...
  } catch (error) {
    console.error('Errore nel recupero dei dati del locale:', error);
  }
});

async function mostraLocali() {
  try {
    const response = await fetch('http://localhost:3000/api/locale');
    const restaurants = await response.json();
    aggiornaGrigliaLocali(restaurants);
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
  const dettagliLocale = document.getElementById('restaurant-details');
  dettagliLocale.innerHTML = ''; // Pulisce eventuali dettagli preesistenti

  // Aggiungi dettagli del locale al lato destro
  const nameElement = document.createElement('h2');
  nameElement.textContent = locale.NOME_LOCALE;

  const cuisineElement = document.createElement('p');
  cuisineElement.textContent = `Cucina: ${locale.TIPO_PRODOTTO || 'N/A'}`;

  // Aggiungi ulteriori dettagli secondo necessità

  // Aggiungi elementi al lato destro
  dettagliLocale.appendChild(nameElement);
  dettagliLocale.appendChild(cuisineElement);

  // Mostra il lato destro con i dettagli del locale
  dettagliLocale.style.display = 'block';
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
  // Cambia la visibilità delle icone in base allo stato della barra laterale
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  if (sidebar.classList.contains("active")) {
    menuIcon.style.display = "none";
    closeIcon.style.display = "inline";
  } else {
    menuIcon.style.display = "inline";
    closeIcon.style.display = "none";
  }
}
