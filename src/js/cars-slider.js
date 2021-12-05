const swiper = new Swiper('.js-cars-slider', {
  spaceBetween: 30,
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1800: {
      spaceBetween: 135,
    },
  }
});
