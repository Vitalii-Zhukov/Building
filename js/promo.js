const headerBurger = document.querySelector("#header-burger");
const headerNavigation = document.querySelector("#header-navigation");
const headerfooterBurger = document.querySelector("#promo-footer-burger");
const headerfooterList = document.querySelector("#promo-footer-list");

headerBurger.addEventListener("click", toggleNavigation);
headerfooterBurger.addEventListener("click", toggleFooterNavigation);
window.document.addEventListener("click", closeNavigation);
headerNavigation.addEventListener("click", (event) => {
    event.stopPropagation();
})

function toggleNavigation (event) {
    event.stopPropagation();
    const display = headerNavigation.style.display;
    
    headerNavigation.style.display = display === "block" ? "none" : "block";
}

function toggleFooterNavigation (event) {
    event.stopPropagation();
    const display = headerfooterList.style.display;
    
    headerfooterList.style.display = display === "grid" ? "none" : "grid";
}

function closeNavigation () {
    if(window.innerWidth > 1024) {
        return;
    }

    headerNavigation.style.display = "none";
    headerfooterList.style.display = "none";
}


