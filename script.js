const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile_menu");
const closeMenu = document.querySelector(".close_menu");

hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});