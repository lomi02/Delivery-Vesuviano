document.addEventListener('DOMContentLoaded', async function () {
  // Cart functionality
  document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM content loaded');
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', function () {
      console.log('Menu toggle clicked');
      sidebar.classList.toggle('open');

      // Salva lo stato del menu nella sessionStorage
      const isMenuOpen = sidebar.classList.contains('open');
      localStorage.setItem('isMenuOpen', isMenuOpen);
    });

    // Controlla lo stato del menu al caricamento della pagina
    const isMenuOpen = localStorage.getItem('isMenuOpen') === 'false';
    if (isMenuOpen) {
      sidebar.classList.add('close');
    }
  });

  document.addEventListener('DOMContentLoaded', async function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const checkoutButton = document.getElementById('checkout-btn');
    const cart = [];

    const restaurantContainer = document.getElementById('restaurant-container');

    try {
      // Fetch restaurant data from the backend
      const response = await fetch('http://localhost:3000/api/locale');
      const locali = await response.json();

      // Update the frontend UI with the fetched locali
      locali.forEach(locale => {
        // Create elements for the locale card
        const card = document.createElement('div');
        card.classList.add('locale-card');

        const image = document.createElement('img');
        image.src = locale.IMAGE_URL; // Replace with the actual property name
        image.alt = locale.NAME; // Replace with the actual property name
        image.classList.add('locale-image');

        const details = document.createElement('div');
        details.classList.add('locale-details');

        const name = document.createElement('h2');
        name.classList.add('locale-name');
        name.textContent = locale.NAME; // Replace with the actual property name

        const cuisine = document.createElement('p');
        cuisine.classList.add('locale-cuisine');
        cuisine.textContent = `Cuisine: ${locale.CUISINE}`; // Replace with the actual property name

        const description = document.createElement('p');
        description.classList.add('locale-description');
        description.textContent = locale.DESCRIPTION; // Replace with the actual property name

        // Append elements to the card
        details.appendChild(name);
        details.appendChild(cuisine);
        details.appendChild(description);

        card.appendChild(image);
        card.appendChild(details);

        // Append the card to the container
        restaurantContainer.appendChild(card);
      });
    } catch (error) {
      console.error('Error fetching restaurants:', error);
    }

    // Function to update filter options with the fetched locales
    function updateFilterOptions(locale) {
      const filterOptionsContainer = document.getElementById('filter-options');

      // Clear existing options
      filterOptionsContainer.innerHTML = '';

      // Add an "All" option
      const allOption = createFilterOption('all', 'All');
      filterOptionsContainer.appendChild(allOption);

      // Add options for each fetched locale
      locales.forEach(locale => {
        const option = createFilterOption(locale.id, locale.name);
        filterOptionsContainer.appendChild(option);
      });
    }

    // Helper function to create a filter option
    function createFilterOption(value, label) {
      const option = document.createElement('div');
      option.className = 'filter-option';
      option.setAttribute('data-filter', value);
      option.textContent = label;

      option.addEventListener('click', function () {
        const filterValue = this.getAttribute('data-filter');
        filterRestaurants(filterValue);
        updateFilterBar(this);
      });

      return option;
    }

    // Additional functions (filterRestaurants, updateFilterBar) are assumed to be present in your code.
  });

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
});
