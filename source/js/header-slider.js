'use strict';
(function () {
const slider = $('.preview-slider__wrapper');

const slides = slider.children();
let firstSlideIndex = 0;
const slideCount = 3;

const makeNextSlideActive = (currentElem, nextElem) => {
  currentElem.removeClass('preview-slider__slide--active');
  nextElem.addClass('preview-slider__slide--active').css('opacity', '0').animate({opacity: 1,}, 2500);
};

const switchNextSlide = () => {
  const activeSlide = $('.preview-slider__slide--active');
  let  activeSlidePosition = activeSlide.index();
  if (activeSlidePosition >= slideCount) {
    activeSlidePosition = firstSlideIndex - 1;
  }
  const nextSlide = $(slides[activeSlidePosition + 1]);

  makeNextSlideActive(activeSlide, nextSlide);
};

const switchPreviousSlide = () => {
  const activeSlide = $('.preview-slider__slide--active');
  let  activeSlidePosition = activeSlide.index();
  if (activeSlidePosition <= firstSlideIndex) {
    activeSlidePosition = slideCount + 1;
  }
  const prevSlide = $(slides[activeSlidePosition - 1]);

  makeNextSlideActive(activeSlide, prevSlide);
};

const timer = setInterval(switchNextSlide, 5000);
})();
