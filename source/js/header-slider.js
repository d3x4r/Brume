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
  currentSlide.css('opacity', '1').animate({opacity: 0,}, 400, () => {
    currentSlide.removeClass('preview-slider__slide--active');
    nextSlide.addClass('preview-slider__slide--active').css('opacity', '0').animate({opacity: 1,}, 400);
  });
};

const switchSlide = (indexFromControl) => {
  const currentSlide = $('.preview-slider__slide--active');
  let  currentSlideIndex = currentSlide.index();
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

// const switchPreviousSlide = () => {
//   const activeSlide = $('.preview-slider__slide--active');
//   let  activeSlidePosition = activeSlide.index();
//   if (activeSlidePosition <= firstSlideIndex) {
//     activeSlidePosition = lastSlideIndex + 1;
//   }
//   const prevSlide = $(slides[activeSlidePosition - 1]);

//   makeNextSlideActive(activeSlide, prevSlide);
// };

const addDesktopSlider = () => {
  if ($('html').prop('clientWidth') > MAX_RESIZE_WIDTH) {
    let autoSlideSwitch = setInterval(switchSlide, 6000);
    sliderControlContainer.on('click', 'li', function () {
      clearInterval(autoSlideSwitch);
      indexSlideFromControl = $(this).index();
      switchSlide(indexSlideFromControl);
      autoSlideSwitch = setInterval(switchSlide, 6000);
    })
  }
};
addDesktopSlider();
})();
