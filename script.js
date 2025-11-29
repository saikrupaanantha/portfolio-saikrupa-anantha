<<<<<<< HEAD
// Script to toggle the navigation menu on small screens
document.getElementById('nav-toggle').addEventListener('click', function () {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
});

// Script to scroll to the top of the page
var scrollToTopBtn = document.getElementById("scroll-to-top");
var rootElement = document.documentElement;

function handleScroll() {
    // Show the button when the user scrolls down 100px from the top of the document
    if (rootElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    // Scroll smoothly to the top
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);


=======
document.getElementById('nav-toggle').addEventListener('click', function () {
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
});

var scrollToTopBtn = document.getElementById("scroll-to-top");
var rootElement = document.documentElement;

function handleScroll() {
    if (rootElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    // Scroll smoothly to the top
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);
>>>>>>> 0c0ab639d8b244b6f5ad960f69149590958c6081
