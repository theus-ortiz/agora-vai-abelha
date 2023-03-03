const burguer  = document.querySelector(".burguer");
const navMenu = document.querySelector(".nav-list");

burguer.addEventListener("click", () => {
    burguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})