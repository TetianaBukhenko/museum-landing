/* eslint-disable no-undef */
'use strict';

// #region onButtonClick
const buttons = document.getElementsByClassName('button');
const subscribeButton = document.getElementById('subscribe__button');

const clickHandler = function() {
  alert('This button in work');
};

subscribeButton.addEventListener('click', () => {
  alert('You have successfully subscribed to our newsletter');
});

for (const button of buttons) {
  button.addEventListener('click', clickHandler);
}
// #endregion

// #region menu
const menuButton = document.querySelector('#icon--menu');
const closeButton = document.querySelector('#icon--close');
const menuBlock = document.querySelector('#menu');
const menuContainer = document.querySelector('.menu__nav');
const pageBody = document.querySelector('.page');
let lastScrollPosition = 0;

function handleOpenMenu() {
  pageBody.style.overflow = 'hidden';
  closeButton.classList.remove('icon--hide');
  closeButton.classList.add('icon--show');
  menuButton.classList.add('icon--hide');
  menuBlock.classList.remove('menu--hide');
  lastScrollPosition = window.scrollY;
}

function handleCloseMenu(event) {
  event.preventDefault();
  menuButton.classList.remove('icon--hide');
  closeButton.classList.remove('icon--show');
  closeButton.classList.add('icon--hide');
  menuBlock.classList.add('menu--hide');
  pageBody.style.overflow = '';

  window.scrollTo(0, lastScrollPosition);
}

menuButton.addEventListener('click', handleOpenMenu);

closeButton.addEventListener('click', handleCloseMenu);

menuContainer.addEventListener('click', (event) => {
  if (event.target.nodeName === 'A') {
    handleCloseMenu();
  }
});
// #endregion

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');

      setTimeout(() => {
        entry.target.classList.remove('hidden');
      }, 3000);
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElementsLeft = document.querySelectorAll('.hidden-left');
const hiddenElementsRight = document.querySelectorAll('.hidden-right');
const allHidden = [...hiddenElements].concat(
  [...hiddenElementsLeft],
  [...hiddenElementsRight],
);

allHidden.forEach((el) => observer.observe(el));

const backToTopButton = document.querySelector('.button__back-to-top');

document.addEventListener('scroll', () => {
  if (window.scrollY > 1000) {
    backToTopButton.classList.remove('hide');
  } else {
    backToTopButton.classList.add('hide');
  }
});
