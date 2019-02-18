'use strict';
(function () {
  const MAX_RESIZE_WIDTH = 1170;
  const TABLET_RESIZE_WIDTH = 768;

  let slides = $('.portfolio-slide');
  window.slidePosition = 87;
  let slideStep = 87;

  let slideCount = $('.portfolio-slide').length;

  if ($('html').prop('clientWidth') >= TABLET_RESIZE_WIDTH && $('html').prop('clientWidth') < MAX_RESIZE_WIDTH) {
    slidePosition = 84;
    slideStep = 84;
  }

  if ($('html').prop('clientWidth') >= MAX_RESIZE_WIDTH) {
    window.slidePosition = 130;
  }

  //jquery mobile touch setttings
  $.event.special.swipe.durationThreshold = 300;
  $.event.special.swipe.horizontalDistanceThreshold = 90;

  const doSlideActive = (slide) => {
    slides.removeClass('portfolio-slide--active');
    slide.addClass('portfolio-slide--active');
  };

  const slideToLeft = (evt) => {
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

  const slideToRight = (evt) => {
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

  $(window).on('resize', function () {

    if ($(this).width() > TABLET_RESIZE_WIDTH) {
      slidePosition = 84;
      slideStep = 84;
    }

    if ($(this).width() < TABLET_RESIZE_WIDTH) {
      slidePosition = 87;
      slideStep = 87;
    }
  });

  const sliderButtons = $('.portfolio-slider__buttons');

  const checkSliderButton = () => {
    const slidesCount = slides.length;
    const slideWidth = 260;
    if (slidesCount * slideWidth <= MAX_RESIZE_WIDTH) {
      sliderButtons.css('display', 'none');
    } else {
      sliderButtons.css('display', 'block');
    }
  };

  const portfolioSlider = $('.portfolio-slider__container');

  portfolioSlider.on('swipeleft', '.portfolio-slide', slideToLeft);
  portfolioSlider.on('swiperight', '.portfolio-slide', slideToRight);



  const allSlides = slides.clone(true);

  const filterButtonsContainer = $('.portfolio__filter-buttons');
  const filterButtons = $('.portfolio__filter-button');

  filterButtonsContainer.on('click', '.portfolio__filter-button', function () {
    filterButtons.removeClass('portfolio__filter-button--active');

    slides = $('.portfolio-slide');
    const filterType = $(this).attr('data-type');
    const filteredSlides = (filterType === 'all') ? allSlides : allSlides.filter(`[data-type="${filterType}"]`);
    $(this).addClass('portfolio__filter-button--active');
    slides.remove();
    portfolioSlider.prepend(filteredSlides);


    if ($('html').prop('clientWidth') < MAX_RESIZE_WIDTH) {
      doSlideActive($('.portfolio-slide:eq(1)'));
    }

    slideCount = $('.portfolio-slide').length;

    slides = $('.portfolio-slide');
    slidePosition = slideStep;

    if ($('html').prop('clientWidth') >= MAX_RESIZE_WIDTH) {
      slideStep = 0;
      slidePosition = 0;
      slides.removeClass('portfolio-slide--active');
    }

    slides.css({
      'transform': `translateX(-${slideStep}vw)`,
    });
    checkSliderButton();
  });

  if ($('html').prop('clientWidth') >= MAX_RESIZE_WIDTH) {
    portfolioSlider.off('swipeleft', '.portfolio-slide', slideToLeft);
    portfolioSlider.off('swiperight', '.portfolio-slide', slideToRight);
    slides.removeClass('portfolio-slide--active');
  }
})();
