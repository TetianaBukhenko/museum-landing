'use strict';

const buttons = document.getElementsByClassName('button');
const subscribeButton = document.getElementById('subscribe__button');

const clickHandler = function() {
  // eslint-disable-next-line no-undef
  alert('This button in work');
};

subscribeButton.addEventListener('click', () => {
  // eslint-disable-next-line no-undef
  alert('You have successfully subscribed to our newsletter');
});

for (const button of buttons) {
  button.addEventListener('click', clickHandler);
}

const menuButton = document.querySelector('#icon--menu');
const closeButton = document.querySelector('#icon--close');

console.log(menuButton);
console.log(closeButton);

menuButton.addEventListener('click', () => {
  closeButton.classList.remove('icon--hide');
  closeButton.classList.add('icon--show');
  menuButton.classList.add('icon--hide');
});

closeButton.addEventListener('click', () => {
  menuButton.classList.remove('icon--hide');
  closeButton.classList.remove('icon--show');
  closeButton.classList.add('icon--hide');
});

// eslint-disable-next-line no-undef
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
