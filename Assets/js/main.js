const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const navMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconShoppingCart = document.querySelector('.navbar-cart');
const asideShoppingCart = document.querySelector('.shopping-cart');

navEmail.addEventListener('click',toggleDesktopMenu);
navMobileMenu.addEventListener('click',toggleMobileMenu);
iconShoppingCart.addEventListener('click',toggleShoppingCart);

function toggleDesktopMenu(){
    //Preguntamos si el shoppingcart esta activo o no
    const isAsideShoppingCartClosed = asideShoppingCart.classList.contains('inactive');
    if(!isAsideShoppingCartClosed){
        //Si el shoppingcart no esta cerrado, se cerrara
        asideShoppingCart.classList.add('inactive');
    }
    //Activamos el desktopMenu
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideShoppingCartClosed = asideShoppingCart.classList.contains('inactive');

    if(!isAsideShoppingCartClosed){
        asideShoppingCart.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    } else if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    asideShoppingCart.classList.toggle('inactive');
}