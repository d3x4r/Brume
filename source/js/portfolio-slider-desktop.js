'use strict';
(function () {

const MAX_RESIZE_WIDTH = 1170;
const sliderWidth = $('.portfolio-slider').width();
const slideButtonRight = $('.portfolio-slider__button--right');
const slideButtonleft = $('.portfolio-slider__button--left');

let slides = $('.portfolio-slide');
const slideStep = 130;
const slideWidth = 260;

let slidesCount = slides.length;

if ($('html').prop('clientWidth') >= MAX_RESIZE_WIDTH) {
  window.slidePosition = 0;
}

const slideToRight = () => {
  slides = $('.portfolio-slide');
  slidesCount = slides.length;
  if (slidesCount * slideWidth <= sliderWidth + window.slidePosition) {
    return;
  }
  window.slidePosition += slideStep;
  slides.css({
    'transform': `translateX(-${window.slidePosition}px)`,
  });
};

const slideToLeft = () => {
  if (window.slidePosition <= 0) {
    return;
  }

  window.slidePosition -= slideStep;
  slides.css({
    'transform': `translateX(-${window.slidePosition}px)`,
  });
};

slideButtonRight.on('click', slideToRight);
slideButtonleft.on('click', slideToLeft);
})();
