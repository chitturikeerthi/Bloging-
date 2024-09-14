const form = document.getElementById('contactForm');
const emailInput = document.getElementById('input-box');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    if (emailInput.value.trim() === '') {
        alert('Please enter a valid email address.');
    } else {
        alert('Thank you for subscribing to our BlogWriter!');
    }
});
