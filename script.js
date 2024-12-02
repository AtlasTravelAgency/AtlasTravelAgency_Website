// Select the hamburger icon, menu, and close icon
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeIcon = document.querySelector('#close-icon');

// Event listener to open the menu
hamburger.addEventListener('click', () => {
  menu.classList.add('active'); // Add the active class to show the menu
});

// Event listener to close the menu
closeIcon.addEventListener('click', () => {
  menu.classList.remove('active'); // Remove the active class to hide the menu
});