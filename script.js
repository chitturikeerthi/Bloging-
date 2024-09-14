
const signupForm = document.querySelector('.signup form');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get the username value from the input field
  const username = signupForm.querySelector('input[name="txt"]').value;

  // Show an alert box with the username and thank you message
  alert(`Welcome, ${username}!\nThank you for signing up. You can now log in.`);
});
document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.querySelector('.signup form');
  const loginForm = document.querySelector('.login form');

  signupForm.addEventListener('submit', function (event) {
      event.preventDefault();
      
      // Retrieve input values
      const username = signupForm.querySelector('input[name="txt"]').value;
      const email = signupForm.querySelector('input[name="email"]').value;
      const password = signupForm.querySelector('input[name="pswd"]').value;

      // Save to localStorage (for demo purposes)
      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
  });

  loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Retrieve input values
      const email = loginForm.querySelector('input[name="email"]').value;
      const password = loginForm.querySelector('input[name="pswd"]').value;

      // Get stored values from localStorage
      const storedEmail = localStorage.getItem('email');
      const storedPassword = localStorage.getItem('password');

      // Simple authentication check
      if (email === storedEmail && password === storedPassword) {
          alert("Login successful!");
          window.location.href = "home.html"; // Redirect to home page
      } else {
          alert("Invalid email or password. Please try again.");
      }
  });
});
