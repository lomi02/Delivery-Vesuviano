// Sistema di verifica token
function verificaToken() {
  return new Promise((resolve, reject) => {
    const tokenString = localStorage.getItem('tokenstring');
    const tokenID = localStorage.getItem('tokenid');
    const userID = localStorage.getItem('userid');
    console.log('Token String from localStorage:', tokenString);
    console.log('Token ID from localStorage:', tokenID);
    console.log('User ID from localStorage:', userID);
    if (tokenID) {
      fetch('http://localhost:3000/api/verify-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': tokenID
        }
      })
        .then(response => {
          console.log(response);
          if (response.headers.get('content-type').includes('application/json')) {
            return response.json();
          } else {
            throw new Error('Server response is not JSON.');
          }
        })
        .then(data => {
          console.log('Risposta da API Verify-Token:', data);
          if (data.success) {
            document.getElementById('loginButton').href = 'impostazioni.html';
            resolve(true);
          } else {
            localStorage.removeItem('tokenid');
            localStorage.removeItem('tokenstring');
            document.getElementById('loginButton').href = 'login.html';
            resolve(false);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          resolve(false);
        });
    } else {
      document.getElementById('loginButton').href = 'login.html';
      resolve(false);
    }
  });
}

window.onload = verificaToken;

// Implementazione globale del sistema del carrello
let carrello = JSON.parse(localStorage.getItem('carrello')) || [];
function aggiungiAlCarrello(piatto) {
  carrello.push(piatto);
  localStorage.setItem('carrello', JSON.stringify(carrello));
  console.log(piatto.NOME_PIATTO + ' è stato aggiunto al carrello.');
  alert("Piatto aggiunto al carrello.");
}

// Funzione per calcolare la somma dei prezzi di tutti gli elementi nel carrello.
function calcolaSomma() {
  let somma = 0;
  carrello.forEach(piatto => {
    somma += piatto.PREZZO;
  });
  return somma.toFixed(2);
}

function navigate(url) {
  window.location.href = url;
}
