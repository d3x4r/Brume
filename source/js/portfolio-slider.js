'use strict';

const MAX_RESIZE_WIDTH = 1170;
const TABLET_RESIZE_WIDTH = 768;

let slides = $('.portfolio-slide');
let slidePosition = 87;
let slideStep = 87;

let slideCount = $('.portfolio-slide').length;

if ($('html').prop('clientWidth') >= TABLET_RESIZE_WIDTH) {
  slidePosition = 84;
  slideStep = 84;
}

//jquery mobile touch setttings
$.event.special.swipe.durationThreshold = 300;
$.event.special.swipe.horizontalDistanceThreshold = 90;

const doSlideActive = (slide) => {
  slides.removeClass('portfolio-slide--active');
  slide.addClass('portfolio-slide--active');
};

const swipeToLeft = (evt) => {
  const currentSlide = $(evt.target);
  const currentSlideIndex = currentSlide.index('.portfolio-slide')

  let nextSlide = slides.eq(currentSlideIndex + 1);

  if (currentSlideIndex === slideCount - 1) {
    return;
  }

  doSlideActive(nextSlide);
  slidePosition += slideStep;

  slides.css({
    'transform': `translateX(-${slidePosition}vw)`,
  });
};

const swipeToRight = (evt) => {
  const currentSlide = $(evt.target);
  const currentSlideIndex = currentSlide.index('.portfolio-slide')

  let prevSlide = slides.eq(currentSlideIndex - 1);

  if (currentSlideIndex <= 0) {
    return;
  }

  doSlideActive(prevSlide);

  slidePosition -= slideStep;

  slides.css({
    'transform': `translateX(-${slidePosition}vw)`,
  });
};

$(window).on('resize', function(){

   if ($(this).width() > TABLET_RESIZE_WIDTH) {
    slidePosition = 84;
    slideStep = 84;
  }

  if ($(this).width() < TABLET_RESIZE_WIDTH) {
    slidePosition = 87;
    slideStep = 87;
  }
});

const portfolioSlider = $('.portfolio-slider__container');

portfolioSlider.on('swipeleft', '.portfolio-slide', swipeToLeft);
portfolioSlider.on('swiperight', '.portfolio-slide', swipeToRight);



const allSlides = slides.clone(true);

const filterButtonsContainer = $('.portfolio__filter-buttons');
const filterButtons = $('.portfolio__filter-button');

filterButtonsContainer.on('click', '.portfolio__filter-button', function() {
  filterButtons.removeClass('portfolio__filter-button--active');
  $(this).addClass('portfolio__filter-button--active');

  slides = $('.portfolio-slide');
  const filterType = $(this).attr('data-type');
  const filteredSlides = (filterType === 'all') ? allSlides : allSlides.filter(`[data-type="${filterType}"]`);

  slides.remove();
  portfolioSlider.prepend(filteredSlides);

  doSlideActive($('.portfolio-slide:eq(1)'));
  slideCount = $('.portfolio-slide').length;

  slides = $('.portfolio-slide');
  slidePosition = slideStep;
  slides.css({
    'transform': `translateX(-${slideStep}vw)`,
  });
});

