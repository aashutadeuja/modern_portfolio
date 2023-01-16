// Select DOM Items

const menuBtn = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('menu.branding');
const menuNav = document.selectQueries('.menu-nav');
const navItems = document.queryselectorAll('.nav-item');

//Set initial state of menu
let showMenu = false;
menuBtn.eventListener('Click', toggleMenu);
function toggleMenu() {
    if(!showMenu){
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuBranding.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));


//Set Menu State
showMenu = true;
 }
else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuBranding.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.add('show'));

    //Set Menu State
    showMenu = false;
}

}