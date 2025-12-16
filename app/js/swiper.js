const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 16,
  breakpoints: {
    // when window width is >= 768px
    850: {
      slidesPerView: 2,
    },
    // when window width is >= 1024px
    1150: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: '.pagination',
    bulletClass: 'pagination__bullet',
    bulletActiveClass: 'pagination__bullet-active',
  },

  navigation: {
    nextEl: '.carousel-button.prev',
    prevEl: '.carousel-button.next',
  },
});
