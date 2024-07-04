/*=======togglee icon media screen==========*/ 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nv-item');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};