'use strict';

const shareBtnEl = document.querySelector('.share-btn');
const socialLinksContainerEl = document.querySelector('.social-links-container');

shareBtnEl.addEventListener('click', function () {
  socialLinksContainerEl.classList.toggle('share-open');
  shareBtnEl.classList.toggle('btn-active');
});
