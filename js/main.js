document.addEventListener('DOMContentLoaded', async function () {
  // Cart functionality
function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
  // Cambia la visibilità delle icone in base allo stato della barra laterale
  var menuIcon = document.getElementById("menu-icon");
  var closeIcon = document.getElementById("close-icon");

  if (sidebar.classList.contains("active")) {
    menuIcon.style.display = "none";
    closeIcon.style.display = "inline";
  } else {
    menuIcon.style.display = "inline";
    closeIcon.style.display = "none";
  }
}
window.addEventListener('beforeunload', function () {
  var sidebar = document.getElementById("sidebar");

  // Chiudi la sidebar prima di scaricare la pagina
  sidebar.classList.remove("active");
});
function openCart() {
  // Logica per aprire il carrello
  console.log("Apri il carrello");
}

function openAccount() {
  // Logica per aprire l'account
  console.log("Apri l'account");
}
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');

  menuToggle.addEventListener('click', function () {
    sidebar.classList.toggle('open');
    const isMenuOpen = sidebar.classList.contains('open');
    localStorage.setItem('isMenuOpen', isMenuOpen);
  });

  const isMenuOpen = localStorage.getItem('isMenuOpen') === 'true';
  if (isMenuOpen) {
    sidebar.classList.add('open');
  }

  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceElement = document.getElementById('total-price');
  const checkoutButton = document.getElementById('checkout-btn');
  const cart = [];

  addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
      const item = {
        name: this.parentElement.getAttribute('data-name'),
        price: parseFloat(this.parentElement.getAttribute('data-price')),
      };

      cart.push(item);
      updateCartUI();
    });
  });

  function calculateTotalPrice() {
    return cart.reduce((total, item) => total + item.price, 0);
  }

  function updateCartUI() {
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
      cartItemsContainer.appendChild(li);
    });

    const totalPrice = calculateTotalPrice();
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;

    document.getElementById('cart').style.display = cart.length > 0 ? 'block' : 'none';
  }


  checkoutButton.addEventListener('click', function () {
    alert('Mock Transaction Successful!\nTotal Amount: $' + calculateTotalPrice().toFixed(2));
    cart.length = 0;
    updateCartUI();
  });

  const filterOptions = document.querySelectorAll('.filter-option');
  const restaurantItems = document.querySelectorAll('.restaurant-item');

  filterOptions.forEach(option => {
    option.addEventListener('click', function () {
      const filterValue = this.getAttribute('data-filter');
      filterRestaurants(filterValue);
      updateFilterBar(this);
    });
  });

  const viewMenuLinks = document.querySelectorAll('.view-menu');
  const purchasableItemsSection = document.getElementById('purchasable-items');

  viewMenuLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      purchasableItemsSection.style.display = purchasableItemsSection.style.display === 'none' ? 'block' : 'none';
    });
  });

  async function fetchRestaurantData() {
    try {
      const response = await fetch('/api/restaurants');
      const restaurants = await response.json();
      // Update your frontend UI with the fetched restaurant data
    } catch (error) {
      console.error('Error fetching restaurant data:', error);
    }
  }

  fetchRestaurantData();

  async function registerUser(userData) {
    try {
      const response = await fetch('/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.status === 201) {
        console.log('User registered successfully');
      } else {
        const data = await response.json();
        console.error('Error registering user:', data.message);
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  }

  const registerButton = document.getElementById('registerButton');

  registerButton.addEventListener('click', function (event) {
    event.preventDefault();
    const username = document.getElementById('registerUsernameInput').value;
    const password = document.getElementById('registerPasswordInput').value;
    const email = document.getElementById('registerEmailInput').value;
    registerUser({ username, password, email });
  });

  async function loginUser(credentials) {
    try {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        console.log('User logged in successfully');
      } else {
        const data = await response.json();
        console.error('Error logging in:', data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }

  const loginButton = document.getElementById('loginButton');

  loginButton.addEventListener('click', function (event) {
    event.preventDefault();
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;
    loginUser({ username, password });
  });
});
