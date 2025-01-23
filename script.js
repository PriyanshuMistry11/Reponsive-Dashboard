const toggleButton = document.getElementById('toggle-menu');
const leftMenu = document.querySelector('.left-menu');
const container = document.querySelector('.container');

// Function to resize the page based on screen width
function resizePage() {
    const width = window.innerWidth;
    let scale = 1;

    // Determine scale based on screen width
    if (width >= 992 && width <= 1600) {
        scale = 0.9;
    } else if (width >= 700 && width <= 767) {
        scale = 0.8;
    } else if (width >= 600 && width < 700) {
        scale = 0.75;
    } else if (width <= 600) {
        scale = 0.5;
    }

    // Apply scaling to the container instead of body
    container.style.transform = `scale(${scale})`;
    container.style.transformOrigin = 'top center';
}

// Function to toggle the left menu's collapsed state
function toggleMenu() {
    leftMenu.classList.toggle('collapsed');
    
    // Optional: Adjust width when collapsed
    if (leftMenu.classList.contains('collapsed')) {
        leftMenu.style.width = '60px';
    } else {
        leftMenu.style.width = '250px';
    }
}

// Responsive resize and initial setup
function initializeResponsiveness() {
    resizePage();
    
    // Additional responsive checks
    if (window.innerWidth < 768) {
        leftMenu.classList.add('mobile-view');
    } else {
        leftMenu.classList.remove('mobile-view');
    }
}

// Event Listeners
window.addEventListener('resize', initializeResponsiveness);
window.addEventListener('load', initializeResponsiveness);
toggleButton.addEventListener('click', toggleMenu);