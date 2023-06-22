const open = document.querySelector(".ri-arrow-drop-down-line");
const close = document.querySelector(".ri-close-line");
const paragraph = document.querySelector(".paragraph");

open.addEventListener("click", function() {
    open.style.display = "none";
    close.style.display = "block"
    paragraph.style.display = "block"
})
close.addEventListener("click", function() {
    close.style.display = "none";
    open.style.display = "block";
    paragraph.style.display = "none"
})

const openNav = document.querySelector(".ri-menu-line");
const closeNav = document.querySelector(".ri-close-fill");
const navLinks = document.querySelector(".navList ul");

openNav.addEventListener("click", function() {
    navLinks.style.top = "35%"
    openNav.style.display = "none";
    closeNav.style.display = "block";
})
closeNav.addEventListener("click", function() {
    navLinks.style.top = "-35%"
    openNav.style.display = "block";
    closeNav.style.display = "none";
})