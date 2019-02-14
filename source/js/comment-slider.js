(function () {
  const DESKTOP_SIZE = 1170;
  const sliderControls = $('.comment-slider__controls-list');
  const sliderControlsButton = $('.slider-controls__item--comment');
  const slider = $('.comment-slider__wrapper');
  const slide = $('.comment-slide');
  const slidesCount = slide.length;
  let slidePosition = 100;
  let windowSize = $(window).width();
  let swipeStep = (windowSize >= DESKTOP_SIZE) ? 112 : 100;
  // Из за pixelperfect и разного поведения слайдера на
  // разных экранах приходится корректировать значения конечной позиции слайдера
  // в функциях nextSlide и slideChoose переменной slidesPositionDifference
  const slidesPositionDifference = 112 - 100;

  $(window).on('resize', function () {
    windowSize = $(this).width();
    swipeStep = (windowSize >= DESKTOP_SIZE) ? 112 : 100;
    getSliderDefault();
  })

  const getSliderDefault = () => {
    slidePosition = 100;
    slide.css('transform', 'translateX(' + -slidePosition + '%)');
    setButtonActive(1);
  };

  const slideChoose = (slideNumber) => {
    slidePosition = (windowSize >= DESKTOP_SIZE) ? (slideNumber * swipeStep) - slidesPositionDifference : slideNumber * swipeStep;
    slide.css('transform', 'translateX(' + -slidePosition + '%)');
  };

  const setButtonActive = (buttonNumber) => {
    sliderControlsButton.removeClass('slider-controls__item--comment-active');
    const activeButton = $('.slider-controls__item--comment:eq(' + buttonNumber + ')');
    activeButton.addClass('slider-controls__item--comment-active');
  };

  const nextSlide = function () {
    if (slidePosition + slidesPositionDifference >= (slidesCount - 1) * swipeStep) {
      return;
    }

    slidePosition += swipeStep;
    slide.css('transform', 'translateX(' + -slidePosition + '%)');

    const numberSlideAfterSwipe = $(this).index() + 1;
    setButtonActive(numberSlideAfterSwipe);
  };

  const prevSlide = function () {
    if (slidePosition < 100) {
      return;
    }
    slidePosition -= swipeStep;
    slide.css('transform', 'translateX(' + (-slidePosition) + '%)');

    const numberSlideAfterSwipe = $(this).index() - 1;
    setButtonActive(numberSlideAfterSwipe);
  };

  slider.on('swipeleft', '.comment-slide', nextSlide);
  slider.on('swiperight', '.comment-slide', prevSlide);

  sliderControls.on('click', '.slider-controls__item--comment', function () {
    const buttonPosition = $(this).index();
    slideChoose(buttonPosition);

    setButtonActive($(this).index());
  })
}());
