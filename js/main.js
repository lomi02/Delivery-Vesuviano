// Sistema verifica di token
window.onload = function () {
  const tokenString = localStorage.getItem('tokenstring');
  const tokenID = localStorage.getItem('tokenid');
  console.log('Token String from localStorage:', tokenString);
  console.log('Token ID from localStorage:', tokenID);
  if (tokenID) {

    // Verifica la validità del token con il server
    fetch('http://localhost:3000/api/verify-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': tokenID
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
          localStorage.removeItem('tokenid');
          localStorage.removeItem('tokenstring');
          document.getElementById('loginButton').href = 'login.html';
        }
      })
      .catch(error => console.error('Error:', error));
  } else {

    // Non c'è token: ritorna il pulsante di login allo stato iniziale
    document.getElementById('loginButton').href = 'login.html';
  }
}

function navigate(url) {
  window.location.href = url;
}
