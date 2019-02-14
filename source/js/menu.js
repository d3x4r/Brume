'use strict';
(function () {
  const ESC_KEYCODE = 27;
  const MAX_RESIZE_WIDTH = 1170;

  const mainMenu = $('.site-navigation__list');
  const menuButton = $('.site-navigation__toggle');
  const arrowDownLink = $('.move-down-button');

  const changeMenuClass = () => {
    menuButton.toggleClass('site-navigation__toggle--open');
    mainMenu.toggleClass('site-navigation__list--open');
    mainMenu.off('click', 'a', moveToAnchor);
  };

  const closeMenuEscButton = (evt) => {
    if (evt.keyCode === ESC_KEYCODE) {
      changeMenuClass();
      $(document).off('keydown', closeMenuEscButton);
    }
  };

  const moveToAnchor = (evt) => {
    evt.preventDefault();
    let likedId = $($(evt.target).attr('href'));
    $('html,body').stop().animate({ scrollTop: likedId.offset().top }, 1000);
  };

  const addScrollArrow = () => {
    if ($('html').prop('clientWidth') < MAX_RESIZE_WIDTH) {
      arrowDownLink.on('click', moveToAnchor);
    }
  };

  menuButton.on('click', () => {
    changeMenuClass();
    $(document).on('keydown', closeMenuEscButton);
    mainMenu.on('click', 'a', moveToAnchor);
  })

  addScrollArrow();
})();
