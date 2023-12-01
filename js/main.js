var sidebar = document.getElementById("sidebar");
var sidebarWidth = 250; // Larghezza desiderata per la sidebar

// Funzione per gestire l'apertura e la chiusura della sidebar
function toggleSidebar() {
  // Calcola la larghezza attuale della sidebar
  var currentWidth = sidebar.offsetWidth;

  // Verifica se la sidebar è completamente aperta
  var isFullyOpen = currentWidth === sidebarWidth;

  // Aggiorna la larghezza in base allo stato corrente
  sidebar.style.width = isFullyOpen ? "0" : sidebarWidth + "px";
}
document.addEventListener('DOMContentLoaded', function () {
  // Cart functionality
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

      addToCart(item);
      updateCartUI();
    });
  });

  function addToCart(item) {
    cart.push(item);
  }

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

    // Show the cart section if there are items in the cart
    document.getElementById('cart').style.display = cart.length > 0 ? 'block' : 'none';
  }

  checkoutButton.addEventListener('click', function () {
    // Simulate a mock transaction
    const totalPrice = calculateTotalPrice();
    alert(`Mock Transaction Successful!\nTotal Amount: $${totalPrice.toFixed(2)}`);

    // Clear the cart after checkout
    cart.length = 0;
    updateCartUI();
  });

  // Restaurant filter functionality
  const filterOptions = document.querySelectorAll('.filter-option');
  const restaurantItems = document.querySelectorAll('.restaurant-item');

  filterOptions.forEach(option => {
    option.addEventListener('click', function () {
      const filterValue = this.getAttribute('data-filter');
      filterRestaurants(filterValue);
      updateFilterBar(this);
    });
  });

  function filterRestaurants(filter) {
    restaurantItems.forEach(item => {
      const cuisine = item.getAttribute('data-cuisine');
      item.style.display = (filter === 'all' || cuisine === filter) ? 'block' : 'none';
    });
  }

  function updateFilterBar(selectedOption) {
    filterOptions.forEach(option => {
      option.classList.remove('active');
    });

    selectedOption.classList.add('active');
  }
});

// View menu functionality
const viewMenuLinks = document.querySelectorAll('.view-menu');
const purchasableItemsSection = document.getElementById('purchasable-items');

viewMenuLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    // Toggle the visibility of the purchasable items section
    purchasableItemsSection.style.display = (purchasableItemsSection.style.display === 'none') ? 'block' : 'none';
  });
});

// Fetch restaurant data
async function fetchRestaurantData() {
  try {
    const response = await fetch('/api/restaurants');
    const restaurants = await response.json();

    // Update your frontend UI with the fetched restaurant data
    // ...
  } catch (error) {
    console.error('Error fetching restaurant data:', error);
  }
}

// Call the function when your page loads or when needed
fetchRestaurantData();

// User registration functionality
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
      // Registration successful
      console.log('User registered successfully');
    } else {
      const data = await response.json();
      console.error('Error registering user:', data.message);
    }
  } catch (error) {
    console.error('Error registering user:', error);
  }
}

// Event listener for the registration button
const registerButton = document.getElementById('registerButton');

registerButton.addEventListener('click', function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Get user input (username, password, email) from your registration form
  const username = document.getElementById('registerUsernameInput').value;
  const password = document.getElementById('registerPasswordInput').value;
  const email = document.getElementById('registerEmailInput').value;

  // Call the registerUser function with the user's data
  registerUser({username, password, email});
});

// User login functionality
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
      // Store the token in localStorage or a cookie for future requests
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

// Event listener for the login button
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', function (event) {
  // Prevent the default form submission
  console.log('Login button clicked');

  // Get user input (username and password) from your login form
  const username = document.getElementById('usernameInput').value;
  const password = document.getElementById('passwordInput').value;

  // Call the loginUser function with the user's credentials
  loginUser({username, password});
});

// Example usage:
const registrationData = {username: 'exampleUser', password: 'examplePassword', email: 'example@example.com'};
registerUser(registrationData);

const loginCredentials = {username: 'exampleUser', password: 'examplePassword'};
loginUser(loginCredentials);
