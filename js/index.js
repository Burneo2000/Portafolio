// Programación para hacer aparecer el menu cuando le damos click en el boton toggle
const navToggle = document.querySelector('.Navegacion__toggle');
const menu = document.querySelector('.menu');

navToggle.addEventListener('click', () => {
    menu.classList.toggle('menu_visible'); //si esta la clase lo elimina, no esta lo añade

    // Accesible para personas discapacitadas
    if(menu.classList.contains('menu_visible')){
        navToggle.setAttribute('aria-label', 'Cerrar menú');
    }else {
        navToggle.setAttribute('aria-label', 'Abrir menú');
    }
});