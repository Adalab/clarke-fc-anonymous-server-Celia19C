'use strict'

var textButton = document.querySelector('.nav-trigger');
var textButton2 = document.querySelector('.nav-close');
textButton.innerHTML = '';
textButton2.innerHTML = '';


// Menú desplegable
var menuBox = document.querySelector('.nav');
var menuButton = document.querySelector('.nav-trigger');
var buttonClose = document.querySelector('.nav-close');
var body = document.querySelector('.body');

// Functión para abrir y cerrar
function openCloseMenu() {
	// menuBox.classList.toggle('menu-open');
  // menuBox.classList.toggle('nav');
    menuBox.classList.toggle('visibility');
};

//Hacer el 'click'
menuButton.addEventListener('click', openCloseMenu);
buttonClose.addEventListener('click', openCloseMenu);
