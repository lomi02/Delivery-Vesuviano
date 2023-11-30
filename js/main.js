document.addEventListener('DOMContentLoaded', function () {
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
    if (cart.length > 0) {
      document.getElementById('cart').style.display = 'block';
    }
  }

  checkoutButton.addEventListener('click', function () {
    // Simulate a mock transaction
    const totalPrice = calculateTotalPrice();
    alert(`Mock Transaction Successful!\nTotal Amount: $${totalPrice.toFixed(2)}`);

    // Clear the cart after checkout
    cart.length = 0;
    updateCartUI();
  });
});

const viewMenuLinks = document.querySelectorAll('.view-menu');
const purchasableItemsSection = document.getElementById('purchasable-items');

viewMenuLinks.forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();

    // For demonstration purposes, toggle the visibility of the purchasable items section
    if (purchasableItemsSection.style.display === 'none') {
      purchasableItemsSection.style.display = 'block';
    } else {
      purchasableItemsSection.style.display = 'none';
    }

    // In a real scenario, you'd fetch and update data from the backend here
    // For now, we're just toggling the visibility of the purchasable items section
  });
});

// Function to fetch restaurant data
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

// Function to handle user registration
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


// Function to handle user login
// Function to handle user login
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
