const menuEmail =document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const menuBurguerIcono=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');
const menuCarIcon=document.querySelector('.navbar-shopping-cart');
const aside=document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguerIcono.addEventListener('click',togglemobileMenu);
menuCarIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function togglemobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

        if(!isAsideClosed){
            aside.classList.add('inactive');
        }

    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');

       if(!ismobileMenuClosed)
       {  
         mobileMenu.classList.add('inactive');//si el menu esta abierto se cierra
       }     
            aside.classList.toggle('inactive');
}
