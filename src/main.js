import '../app/scss/styles.scss';

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

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

const topNavMenu = document.querySelector('.js-topNavMenu');
const modalForm = document.querySelector('.js-modalForm');
const main = document.querySelector('.js-main');
const footer = document.querySelector('.js-footer');
const overlayMob = document.querySelector('.js-overlay-mobile');
const overlayModal = document.querySelector('.js-overlayModal');
const btnOpen = document.querySelector('.js-btnOpen');
const btnOpenModal = document.querySelector('.js-modalOpen');
const btnClose = document.querySelector('.js-btnClose');
const btnCloseModal = document.querySelector('.js-modalClose');
const bpMob = window.matchMedia('(width < 48em)');

const openMobMenu = () => {
  btnOpen.setAttribute('aria-expanded', true);
  topNavMenu.inert = false;
  main.inert = true;
  footer.inert = true;
  topNavMenu.style.transitionDuration = '300ms';
  overlayMob.style.transitionDuration = '300ms';
  disableBodyScroll(topNavMenu);
  btnClose.focus();
};

const openModal = () => {
  btnOpenModal.setAttribute('aria-expanded', true);
  modalForm.setAttribute('aria-hidden', false);
  modalForm.inert = false;
  main.inert = true;
  footer.inert = true;
  modalForm.style.transitionDuration = '250ms';
  overlayModal.style.transitionDuration = '250ms';
  disableBodyScroll(modalForm);
  btnCloseModal.focus();
};

const closeMobMenu = () => {
  btnOpen.setAttribute('aria-expanded', false);
  topNavMenu.inert = true;
  main.inert = false;
  footer.inert = false;
  enableBodyScroll(topNavMenu);
  btnOpen.focus();

  setTimeout(() => {
    topNavMenu.style.transitionDuration = '';
    overlayMob.style.transitionDuration = '';
  }, 350);
};

const closeModal = () => {
  btnOpenModal.setAttribute('aria-expanded', false);
  modalForm.setAttribute('aria-hidden', true);
  modalForm.inert = true;
  main.inert = false;
  footer.inert = false;
  enableBodyScroll(modalForm);
  btnOpenModal.focus();

  setTimeout(() => {
    modalForm.style.transitionDuration = '';
    overlayModal.style.transitionDuration = '';
  }, 300);
};

const setupTopNav = () => {
  if (bpMob.matches && btnOpen.hasAttribute('aria-expanded', false)) {
    topNavMenu.inert = true;
  } else {
    topNavMenu.inert = false;
  }
};

btnOpen.addEventListener('click', openMobMenu);
btnClose.addEventListener('click', closeMobMenu);

btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);

bpMob.addEventListener('change', setupTopNav);
