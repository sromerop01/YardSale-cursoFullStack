const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const navMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const iconShoppingCart = document.querySelector('.navbar-cart');
const asideShoppingCart = document.querySelector('.shopping-cart');
const productDetailContainer = document.querySelector('.product-details')
const productDetailClose = document.querySelector('.product-close')

navEmail.addEventListener('click',toggleDesktopMenu);
navMobileMenu.addEventListener('click',toggleMobileMenu);
iconShoppingCart.addEventListener('click',toggleShoppingCart);
myOrders.addEventListener('click', toggleMyOrders);
productDetailClose.addEventListener('click', closeProductDetail);

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
    closeProductDetail();
}

function toggleShoppingCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
    if(!isProductDetailClosed){
        productDetailContainer.classList.add('inactive');
    }
    asideShoppingCart.classList.toggle('inactive');
}
function openProductDetail(){
    asideShoppingCart.classList.add('inactive');
    productDetailContainer.classList.remove('inactive');
}
function closeProductDetail(){
    productDetailContainer.classList.add('inactive');
}

const cardsContainer=document.querySelector('.cards-container')
/*
<div class="product-card">
    <img src="./Assets/switch.jfif" alt="">
    <div class="product-info">
        <div>
            <p>$$$$$$$</p>
            <p>Producto 1</p>
        </div>
        <figure>
            <img src="./Assets/Icons/bt_add_to_cart.svg" alt="cart">
        </figure>
    </div>
</div>
*/

//Lista de productos
const productList =[];
productList.push({
    name: 'Nintendo Switch',
    price: 2000000,
    imagen: './Assets/switch.jfif',
});
productList.push({
    name: 'Xbox series X',
    price: 3000000,
    imagen: './Assets/xbox.jfif',
});
productList.push({
    name: 'Playstation 5',
    price: 3500000,
    imagen: './Assets/play.jpg',
});

//Recorremos la lista de procutos para agregarlo al html
// for(product of productList){
//     const productCard=document.createElement('div');
//     productCard.classList.add('product-card');

//     const img=document.createElement('img');
//     img.setAttribute('src', product.imagen);

//     const productInfo=document.createElement('div');
//     productInfo.classList.add('product-info');

//     const productInfoDiv=document.createElement('div');

//     const productPrice=document.createElement('p');
//     productPrice.innerText ='$'+product.price;
//     const productName=document.createElement('p');
//     productName.innerText = product.name;

//     productInfoDiv.append(productPrice, productName)

//     const productInfoFigure=document.createElement('figure');
//     const productImgCart=document.createElement('img');
//     productImgCart.setAttribute('src', './Assets/Icons/bt_add_to_cart.svg');

//     productInfoFigure.appendChild(productImgCart);

//     productInfo.append(productInfoDiv, productInfoFigure);

//     productCard.append(img, productInfo);

//     cardsContainer.appendChild(productCard);

// }

//Creamo una funcion para optimizar y organizar
function renderProducts(arr){
    for(product of arr){
        const productCard=document.createElement('div');
        productCard.classList.add('product-card');
    
        const img=document.createElement('img');
        img.setAttribute('src', product.imagen);
        img.addEventListener('click', openProductDetail)
    
        const productInfo=document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv=document.createElement('div');
    
        const productPrice=document.createElement('p');
        productPrice.innerText ='$'+product.price;
        const productName=document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.append(productPrice, productName)
    
        const productInfoFigure=document.createElement('figure');
        const productImgCart=document.createElement('img');
        productImgCart.setAttribute('src', './Assets/Icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(img, productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }
}

renderProducts(productList);