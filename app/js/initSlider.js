var swiper = new Swiper('.swiper-container', {
    loop: true,
    effect: 'fade',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})