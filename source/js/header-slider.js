'use strict';
(function () {
  const MAX_RESIZE_WIDTH = 1170;

  const slider = $('.preview-slider__wrapper');

  const slides = slider.children();
  let firstSlideIndex = 0;
  const lastSlideIndex = 3;
  let indexSlideFromControl;

  const sliderControlContainer = $('.slider-controls-header');
  const sliderControlButtons = $('.slider-controls__item');


  const changeSlideClassWithFade = (currentSlide, nextSlide) => {
    currentSlide.css('opacity', '1').animate({ opacity: 0, }, 400, () => {
      currentSlide.removeClass('preview-slider__slide--active');
      nextSlide.addClass('preview-slider__slide--active').css('opacity', '0').animate({ opacity: 1, }, 400);
    });
  };

  const switchSlide = (indexFromControl) => {
    const currentSlide = $('.preview-slider__slide--active');
    let currentSlideIndex = currentSlide.index();
    if (currentSlideIndex >= lastSlideIndex) {
      currentSlideIndex = firstSlideIndex - 1;
    }

    if (indexFromControl >= 0) {
      currentSlideIndex = indexFromControl - 1;
    }

    const nextSlide = $(slides[currentSlideIndex + 1]);
    sliderControlButtons.removeClass('slider-controls__item--active');
    sliderControlButtons.eq(currentSlideIndex + 1).addClass('slider-controls__item--active');
    changeSlideClassWithFade(currentSlide, nextSlide);

  };

  let autoSlideSwitch = setInterval(switchSlide, 6000);

  const slideChange = function () {
    if ($(this).is('.slider-controls__item--active')) {
      return;
    }
    clearInterval(autoSlideSwitch);
    indexSlideFromControl = $(this).index();
    switchSlide(indexSlideFromControl);
    autoSlideSwitch = setInterval(switchSlide, 6000);
  };

  if ($('html').prop('clientWidth') > MAX_RESIZE_WIDTH) {
    sliderControlContainer.on('click', 'li', slideChange);
  } else {
    clearInterval(autoSlideSwitch);
  }

  $(window).on('resize', function () {
    if ($('html').prop('clientWidth') > MAX_RESIZE_WIDTH) {
      sliderControlContainer.off('click', 'li', slideChange);
      sliderControlContainer.on('click', 'li', slideChange);
      clearInterval(autoSlideSwitch);
      autoSlideSwitch = setInterval(switchSlide, 6000);
    } else {
      clearInterval(autoSlideSwitch);
    }
  })
})();
