document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const moreButton = document.getElementById('more');
    const mobNav = document.getElementById('mobnav');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('close-button');

    // Function to toggle sidebar and overlay
    function toggleSidebar() {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
    }

    // Open sidebar when more button is clicked
    moreButton.addEventListener('click', function() {
        toggleSidebar();
    });

    closeButton.addEventListener('click', function() {
        overlay.classList.remove('active');
        sidebar.classList.remove('active');
    });

    mobNav.addEventListener('click', function() {
        toggleSidebar();
    });
    
    // Close sidebar when overlay is clicked
    overlay.addEventListener('click', function() {
        toggleSidebar();
    });

    
});
