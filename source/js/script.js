'use strict';

var ESC_KEYCODE = 27;
var menuButton = document.querySelector('.site-navigation__toggle');
var mainMenu = document.querySelector('.site-navigation__list');


var closeMenu = function () {
  menuButton.classList.remove('site-navigation__toggle--open');
  mainMenu.classList.remove('site-navigation__list--open');
};

var changeMenuStatus = function () {
  menuButton.classList.toggle('site-navigation__toggle--open');
  mainMenu.classList.toggle('site-navigation__list--open');
};

var onButtonKeydown = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeMenu();
    document.removeEventListener('keydown', onButtonKeydown);
  }
};

menuButton.addEventListener('click', function () {
  changeMenuStatus();
  document.addEventListener('keydown', onButtonKeydown);
});
