
const menuIcon = document.getElementById("menu-icon");
const nav = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
});
