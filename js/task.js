'use strict';

import GalleryItems from './gallery-items.js';

const refsGallery = {
  gallery: document.querySelector('.js-gallery'),
  lightbox: document.querySelector('.js-lightbox'),
  lightboxImage: document.querySelector('.lightbox__image'),
  lightboxButton: document.querySelector(
    'button[data-action="close-lightbox"]',
  ),
};

function CreateGalleryItems() {
  const arr = [];

  const elemLi = document.createElement('li');
  const elemA = document.createElement('a');
  const elemImg = document.createElement('img');
  const elemSpan = document.createElement('span');
  const elemI = document.createElement('i');

  elemLi.classList.add('gallery__item');
  elemA.classList.add('gallery__link');
  elemImg.classList.add('gallery__image');
  elemSpan.classList.add('gallery__icon');
  elemI.classList.add('material-icons');

  elemI.textContent = 'zoom_out_map';

  elemLi.append(elemA, elemSpan);
  elemA.appendChild(elemImg);
  elemSpan.appendChild(elemI);

  GalleryItems.forEach(item => {
    elemA.href = item.original;
    elemImg.src = item.preview;
    elemImg.alt = item.description;
    elemImg.dataset.source = item.original;
    arr.push(elemLi.outerHTML);
  });
  return arr.join(' ');
};

refsGallery.gallery.insertAdjacentHTML('afterbegin', CreateGalleryItems());

/* Open Lightbox */

refsGallery.gallery.addEventListener('click', openLightbox);

function openLightbox(e) {
  e.preventDefault()

  const target = e.target;
  const bigImgSrc = target.dataset.source;

  refsGallery.lightbox.classList.add('is-open');
  refsGallery.lightboxImage.src = bigImgSrc;
}

/* Close Lightbox */

refsGallery.lightboxButton.addEventListener('click', closeLightbox);

function closeLightbox() {
  refsGallery.lightbox.classList.remove('is-open');
  refsGallery.lightboxImage.src = '';
};
