'use strict';

var ESC_KEYCODE = 27;
var menuButton = document.querySelector('.site-navigation__toggle');
var mainMenu = document.querySelector('.site-navigation__list');

var onButtonKeydown = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    menuButton.classList.remove('site-navigation__toggle--open');
    mainMenu.classList.remove('site-navigation__list--open');
    document.removeEventListener('keydown', onButtonKeydown);
  }
};

var changeMenuClass = function () {
  menuButton.classList.toggle('site-navigation__toggle--open');
  mainMenu.classList.toggle('site-navigation__list--open');
};

var onButtonKeydown = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    changeMenuClass();
    document.removeEventListener('keydown', onButtonKeydown);
  }
};

menuButton.addEventListener('click', function () {
  changeMenuClass();
  document.addEventListener('keydown', onButtonKeydown);
});
