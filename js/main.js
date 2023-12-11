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
