(function(){
  const sliderControls = $('.comment-slider__controls-list');
  const sliderControlsButton = $('.slider-controls__item--comment');
  const slider = $('.comment-slider__wrapper');
  const slide = $('.comment-slide');
  const slidesCount = slide.length;
  let slidePosition = 100;
  const swipeStep = 100;

  const slideChoose = (index) => {
    slidePosition = index * swipeStep;
    slide.css('transform', 'translateX(' + -index * swipeStep + '%)');
  };

  slider.on('swipeleft', '.comment-slide', function() {
    if (slidePosition >= (slidesCount - 1) * swipeStep) {
      return;
    }
    const slideNumber = $(this).index() + 1;
    const btn = $('.slider-controls__item--comment:eq(' + slideNumber +')');
    sliderControlsButton.removeClass('slider-controls__item--comment-active');
    btn.addClass('slider-controls__item--comment-active');

    slidePosition += swipeStep;
    slide.css('transform', 'translateX(' + (-slidePosition) + '%)');
  })

  slider.on('swiperight', '.comment-slide', function() {
    if (slidePosition < 100) {
      return;
    }
    const slideNumber = $(this).index() - 1;
    const btn = $('.slider-controls__item--comment:eq(' + slideNumber +')');
    sliderControlsButton.removeClass('slider-controls__item--comment-active');
    btn.addClass('slider-controls__item--comment-active');

    slidePosition -= swipeStep;
    slide.css('transform', 'translateX(' + (-slidePosition) + '%)');
  })

  sliderControls.on('click', '.slider-controls__item--comment', function (){
    const buttonPosition = $(this).index();
    sliderControlsButton.removeClass('slider-controls__item--comment-active');
    $(this).addClass('slider-controls__item--comment-active');
    slideChoose(buttonPosition);
  })
}());
