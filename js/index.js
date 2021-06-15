// Programación para hacer aparecer el menu cuando le damos click en el boton toggle
const navToggle = document.querySelector('.Navegacion__toggle');
const navToggleIcono = document.querySelector('.Navegacion__toggle i');
const menu = document.querySelector('.menu');

navToggle.addEventListener('click', () => {
    menu.classList.toggle('menu_visible'); //si esta la clase lo elimina, no esta lo añade

    //Si la barra de navegación ya contiene la clase menu_visible cambiamos el icono de hamburguesa por la X
    if(menu.classList.contains('menu_visible')){
        navToggleIcono.setAttribute('Class', 'fas fa-times');
    }else{
        navToggleIcono.setAttribute('Class', 'fas fa-bars');
    }


    // Accesible para personas discapacitadas
    if(menu.classList.contains('menu_visible')){
        navToggle.setAttribute('aria-label', 'Cerrar menú');
    }else {
        navToggle.setAttribute('aria-label', 'Abrir menú');
    }
});


// Cambiar el color de la barra de navegación al hacer scroll
const barraDeNavegacion = document.getElementById('Navegacion');

window.addEventListener('scroll', () => {
    barraDeNavegacion.classList.toggle('active', window.scrollY > 0); //Agregas o quitamos la clase Active al header
});



