document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const moreButton = document.getElementById('more');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    // Function to toggle sidebar and overlay
    function toggleSidebar() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    // Open sidebar when more button is clicked
    moreButton.addEventListener('click', function() {
        toggleSidebar();
    });

    // Close sidebar when overlay is clicked
    overlay.addEventListener('click', function() {
        toggleSidebar();
    });
});



document.addEventListener('DOMContentLoaded', function() {
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.donor-card');
const slideWidth = slides[0].getBoundingClientRect().width;
let currentIndex = 0;

function updateSlider() {
    const offset = -currentIndex * slideWidth;
    track.style.transform = `translateX(${offset}px)`;
}

function autoSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
}

// Set the interval for automatic sliding
setInterval(autoSlide, 5000); // Adjust the interval (5000ms = 5s) as needed
});


document.addEventListener('DOMContentLoaded', function() {
// Select all <a> tags inside <li> elements within <ul> elements with class .all-tags
var allTagsLinks = document.querySelectorAll('.all-tags li a');

// Loop through each <a> tag and add the class .ri-button
allTagsLinks.forEach(function(link) {
    link.classList.add('ri-button');
});
});
