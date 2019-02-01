'use strict';

const slide = $('.portfolio-slide');
let slidePosition = 87;
const slideStep = 87;
const slideCount = 6;

const swipeToLeft = (evt) => {
  const currentSlide = $(evt.target);
  const currentSlideIndex = currentSlide.index('.portfolio-slide')

  let nextSlide = slide.eq(currentSlideIndex + 1);

  if (currentSlideIndex === slideCount - 1) {
    nextSlide = slide.eq(0);
  }

  currentSlide.removeClass('portfolio-slide--active');
  nextSlide.addClass('portfolio-slide--active');

  slidePosition += slideStep;

  if (slidePosition >= slideStep * slideCount) {
    slidePosition = 0;
  }
  slide.css({
    'transform': `translateX(-${slidePosition}vw)`,
  });
};

const swipeToRight = (evt) => {
  const currentSlide = $(evt.target);
  const currentSlideIndex = currentSlide.index('.portfolio-slide')

  let prevSlide = slide.eq(currentSlideIndex - 1);

  if (currentSlideIndex < 0) {
    prevSlide = slide.eq(slideCount - 1);
  }

  currentSlide.removeClass('portfolio-slide--active');
  prevSlide.addClass('portfolio-slide--active');

  slidePosition -= slideStep;
  if (slidePosition < 0) {
    slidePosition = slideStep * (slideCount - 1);
  }
  slide.css({
    'transform': `translateX(-${slidePosition}vw)`,
  });
};

slide.on('swipeleft', swipeToLeft);
slide.on('swiperight', swipeToRight);
