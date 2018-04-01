'use strict'

var textButton = document.querySelector('.nav-trigger');
var textButton2 = document.querySelector('.nav-close');
textButton.innerHTML = '';
textButton2.innerHTML = '';

// Menú desplegable
var menuBox = document.querySelector('.nav');
var menuButton = document.querySelector('.nav-trigger');
var buttonClose = document.querySelector('.nav-close');

// Función para abrir y cerrar
function openCloseMenu() {
menuBox.classList.toggle('visibility');
};

//El 'click'
menuButton.addEventListener('click', openCloseMenu);
buttonClose.addEventListener('click', openCloseMenu);
