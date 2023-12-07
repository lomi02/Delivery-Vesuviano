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

  return card;
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const menuIcon = document.getElementById("menu-icon");
  const closeIcon = document.getElementById("close-icon");

  if (sidebar) {
    sidebar.classList.toggle("active");

    // Cambia la visibilità delle icone in base allo stato della barra laterale
    if (sidebar.classList.contains("active")) {
      menuIcon.style.display = "none";
      closeIcon.style.display = "inline";
    } else {
      menuIcon.style.display = "inline";
      closeIcon.style.display = "none";
    }
  }
}

// Funzione per gestire l'apertura del carrello
function openCart() {
  // Logica per aprire il carrello
  console.log("Apri il carrello");
}

// Funzione per gestire l'apertura dell'account
function openAccount() {
  // Logica per aprire l'account
  console.log("Apri l'account");
}
