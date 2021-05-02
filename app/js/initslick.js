// инициализация слайдера блока Client Review
$(document).ready(function(){
    $('.clientReview_slider').slick({
      arrows: false,
      dots: true,
      infinite: true,
      speed: 1000,
      draggable: true
    });
  });

// инициализация слайдера блока Amazing Offer

$(document).ready(function(){
  $('.offer_slider').slick({
    arrows: false,
    dots: true,
    pauseOnDotsHover: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });
});

// инициализация слайдера блока Featured Events

$(document).ready(function(){
  $('.featuredEvents_slider').slick({
    arrows: true,
    prevArrow: '<div class="featuredEvents_arrow featuredEvents_slider-arrow_left"></div>',
    nextArrow: '<div class="featuredEvents_arrow featuredEvents_slider-arrow_right"></div>',
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1200,
    cssEase: 'linear'
  });
});