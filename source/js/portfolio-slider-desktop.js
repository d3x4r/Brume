'use strict';

// const MAX_RESIZE_WIDTH = 1170;
// const TABLET_RESIZE_WIDTH = 768;

// let slides = $('.portfolio-slide');
// let slidePosition = 87;
// let slideStep = 87;

// let slideCount = $('.portfolio-slide').length;

// if ($('html').prop('clientWidth') >= TABLET_RESIZE_WIDTH) {
//   slidePosition = 84;
//   slideStep = 84;
// }

// //jquery mobile touch setttings
// $.event.special.swipe.durationThreshold = 300;
// $.event.special.swipe.horizontalDistanceThreshold = 90;

// const doSlideActive = (slide) => {
//   slides.removeClass('portfolio-slide--active');
//   slide.addClass('portfolio-slide--active');
// };

// const slideToLeft = (evt) => {
//   const currentSlide = $(evt.target);
//   const currentSlideIndex = currentSlide.index('.portfolio-slide')

//   let nextSlide = slides.eq(currentSlideIndex + 1);

//   if (currentSlideIndex === slideCount - 1) {
//     return;
//   }

//   doSlideActive(nextSlide);
//   slidePosition += slideStep;

//   slides.css({
//     'transform': `translateX(-${slidePosition}vw)`,
//   });
// };

// const slideToRight = (evt) => {
//   const currentSlide = $(evt.target);
//   const currentSlideIndex = currentSlide.index('.portfolio-slide')

//   let prevSlide = slides.eq(currentSlideIndex - 1);

//   if (currentSlideIndex <= 0) {
//     return;
//   }

//   doSlideActive(prevSlide);

//   slidePosition -= slideStep;

//   slides.css({
//     'transform': `translateX(-${slidePosition}vw)`,
//   });
// };

// $(window).on('resize', function(){

//    if ($(this).width() > TABLET_RESIZE_WIDTH) {
//     slidePosition = 84;
//     slideStep = 84;
//   }

//   if ($(this).width() < TABLET_RESIZE_WIDTH) {
//     slidePosition = 87;
//     slideStep = 87;
//   }
// });

// const portfolioSlider = $('.portfolio-slider__container');

// portfolioSlider.on('swipeleft', '.portfolio-slide', slideToLeft);
// portfolioSlider.on('swiperight', '.portfolio-slide', slideToRight);



// const allSlides = slides.clone(true);

// const filterButtonsContainer = $('.portfolio__filter-buttons');
// const filterButtons = $('.portfolio__filter-button');

// filterButtonsContainer.on('click', '.portfolio__filter-button', function() {
//   filterButtons.removeClass('portfolio__filter-button--active');
//   $(this).addClass('portfolio__filter-button--active');

//   slides = $('.portfolio-slide');
//   const filterType = $(this).attr('data-type');
//   const filteredSlides = (filterType === 'all') ? allSlides : allSlides.filter(`[data-type="${filterType}"]`);

//   slides.remove();
//   portfolioSlider.prepend(filteredSlides);

//   doSlideActive($('.portfolio-slide:eq(1)'));
//   slideCount = $('.portfolio-slide').length;

//   slides = $('.portfolio-slide');
//   slidePosition = slideStep;
//   slides.css({
//     'transform': `translateX(-${slideStep}vw)`,
//   });
// });

// if ($('html').prop('clientWidth') >= MAX_RESIZE_WIDTH) {
//   portfolioSlider.off('swipeleft', '.portfolio-slide', slideToLeft);
//   portfolioSlider.off('swiperight', '.portfolio-slide', slideToRight);
//   slides.removeClass('portfolio-slide--active');
// }

// const buttons = $('portfolio-slider__buttons');
const slideButtonRight = $('.portfolio-slider__button--right');
const slideButtonleft = $('.portfolio-slider__button--left');
let slides = $('.portfolio-slide');


const mainSlider = $('.portfolio-slider');
let sliderWidth = mainSlider.width();
let sliders = $('.portfolio-slide');
let slidersPositions = 0;
const slidersStep = 130;

let clisderCount = sliders.length;

const sliderToRight = () => {
  slides = $('.portfolio-slide');

  if (clisderCount * 260 <= sliderWidth + slidersPositions) {
    return;
  }
  slidersPositions += slidersStep;
  slides.css({
    'transform': `translateX(-${slidersPositions}px)`,
  });
};

const sliderToleft = () => {
  if (slidersPositions <= 0) {
    return;
  }

  slidersPositions -= slidersStep;
  slides.css({
    'transform': `translateX(-${slidersPositions}px)`,
  });

};


slideButtonRight.on('click', sliderToRight);
slideButtonleft.on('click', sliderToleft);
