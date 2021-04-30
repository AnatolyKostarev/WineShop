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
    infinite: true,
    speed: 1000,
    focusOnSelect: true,
    draggable: true,
    slidesToShow: 3,
    slidesToScroll: 1
  });
});