window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#00f'; /* Change background color when scrolled */
    } else {
        navbar.style.backgroundColor = '#333';
    }
});