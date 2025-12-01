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

// Tab Switching Script
const buttons = document.querySelectorAll(".toggle-btn");
const contents = document.querySelectorAll(".toggle-content");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const target = button.getAttribute("data-target");

        contents.forEach(content => {
            content.classList.remove("active");
            if (content.id === target) {
                content.classList.add("active");
            }
        });
    });
});


