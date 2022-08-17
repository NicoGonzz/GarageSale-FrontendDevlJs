const menuEmail =document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const menuBurguerIcono=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguerIcono.addEventListener('click',togglemobileMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}
function togglemobileMenu(){
    mobileMenu.classList.toggle('inactive');
}
