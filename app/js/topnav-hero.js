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
  bodyScrollLock.disableBodyScroll(topNavMenu);
  btnClose.focus();
};

const openModal = () => {
  btnOpenModal.setAttribute('aria-expanded', true);
  modalForm.inert = false;
  main.inert = true;
  footer.inert = true;
  modalForm.style.transitionDuration = '250ms';
  overlayModal.style.transitionDuration = '250ms';
  bodyScrollLock.disableBodyScroll(modalForm);
  btnCloseModal.focus();
};

const closeMobMenu = () => {
  btnOpen.setAttribute('aria-expanded', false);
  topNavMenu.inert = true;
  main.inert = false;
  footer.inert = false;
  bodyScrollLock.enableBodyScroll(topNavMenu);
  btnOpen.focus();

  setTimeout(() => {
    topNavMenu.style.transitionDuration = '';
    overlayMob.style.transitionDuration = '';
  }, 350);
};

const closeModal = () => {
  btnOpenModal.setAttribute('aria-expanded', false);
  modalForm.inert = true;
  main.inert = false;
  footer.inert = false;
  bodyScrollLock.enableBodyScroll(modalForm);
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
