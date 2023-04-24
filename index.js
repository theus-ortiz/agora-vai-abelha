const burguer  = document.querySelector(".burguer");
const navMenu = document.querySelector(".nav-list");
const navItem = document.querySelector(".nav-item");

burguer.addEventListener("click", () => {
    burguer.classList.toggle('active');
    navMenu.classList.toggle('active');
    navItem.classList.toggle('active');
})