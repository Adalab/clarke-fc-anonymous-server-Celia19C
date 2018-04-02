'use strict'

var button1 = document.querySelector('.nav-trigger');
var button2 = document.querySelector('.nav-close');

//Quitar texto botones
button1.innerHTML = '';
button2.innerHTML = '';

// Menú desplegable
var menuBox = document.querySelector('.nav');
      // Función para abrir y cerrar
function openCloseMenu() {
  menuBox.classList.toggle('visible');
};
      //El 'click'
button1.addEventListener('click', openCloseMenu);
button2.addEventListener('click', openCloseMenu);
