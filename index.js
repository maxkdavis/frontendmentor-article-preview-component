'use strict';

const shareBtnEl = document.querySelector('.share-btn');
const socialLinksContainerEl = document.querySelector('.social-links-container');

shareBtnEl.addEventListener('click', function () {
  console.log('clicked');
  socialLinksContainerEl.classList.toggle('share-open');
});
