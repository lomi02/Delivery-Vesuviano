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

      // Salva il token nel localStorage
      localStorage.setItem('token', result.token);
      window.location.href = 'LogSuccess.html';
    } else {
      alert('Login failed. Please check your credentials.');
    }
  } catch (error) {
    console.error('Error during login:', error);
  }
}

// Sistema verifica di token
window.onload = function () {
  const token = localStorage.getItem('token');
  console.log('Token from localStorage:', token);
  if (token) {

    // Verifica la validità del token con il server
    fetch('http://localhost:3000/api/verify-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
      .then(response => {
        // Controlla se la risposta è un JSON valido
        if (response.headers.get('content-type').includes('application/json')) {
          return response.json();
        } else {
          throw new Error('Server response is not JSON.');
        }
      })
      .then(data => {
        console.log('Risposta da API Verify-Token:', data);
        if (data.success) {

          // Il token è valido: cambia il pulsante di login in un pulsante di impostazioni
          document.getElementById('loginButton').href = 'impostazioni.html';
        } else {

          // Il token non è valido: rimuovi il token e ritorna il pulsante di login allo stato iniziale
          localStorage.removeItem('token');
          document.getElementById('loginButton').href = 'login.html';
        }
      })
      .catch(error => console.error('Error:', error));
  } else {

    // Non c'è token: ritorna il pulsante di login allo stato iniziale
    document.getElementById('loginButton').href = 'login.html';
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

    const data = await response.json();
    if (response.status === 201) {
      console.log('Utente registrato con successo');
      window.location.href = 'RegSuccess.html';
    } else {
      console.error('Errore durante la registrazione dell\'utente:', data.message);
    }
  } catch (error) {
    console.error('Errore durante la registrazione dell\'utente:', error);
  }
}

function navigate(url) {
  window.location.href = url;
}
