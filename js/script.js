const burgerBtn = document.querySelector("#burgerBtn");
const navMobile = document.querySelector("nav ul");
const navList = document.querySelectorAll("nav li");

burgerBtn.addEventListener ("click", fadeInMenu);
burgerBtn.addEventListener ("click", stylishLinks);

function fadeInMenu() {
    navMobile.classList.toggle("nav-visible");
}

function stylishLinks() {
    navList.forEach(function(links, length){
        if (links.style.animation) {
            links.style.animation = '';
        } else {
            links.style.animation = `fade-in 0.3s forwards  ${length / 6 + 0.5}s`
        }

    })
}