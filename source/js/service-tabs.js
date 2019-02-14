"use strict";
(function () {
  const serviceSlideButtonsContainer = $('.service-slider__switch-buttons');
  const serviceSlideButtons = $('.service-slider__switch-button');
  const serviceSlides = $('.service-slider__slide');

  serviceSlideButtonsContainer.on('click', 'li', function (evt) {
    evt.preventDefault();
    serviceSlideButtons.removeClass('service-slider__switch-button--active');
    $(this).addClass('service-slider__switch-button--active');

    serviceSlides.removeClass('service-slider__slide--active');
    const slideType = $(this).attr('data-content');
    $('.service-slider__slide[data-content=' + slideType + ']').css('opacity', '0').addClass('service-slider__slide--active').animate({ opacity: "1", }, 600);
  })
}());

