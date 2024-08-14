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
