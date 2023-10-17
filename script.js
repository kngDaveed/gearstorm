/*=======togglee icon media screen==========*/ 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nv-item');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-message-square-x');
    navbar.classList.toggle('active');
};