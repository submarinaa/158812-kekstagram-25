//Модуль, отвечающий за фильтрацию изображений
import {QUANTITY_RANDOM_PICTURES, TIMEOUT_DELAY} from './constants.js';
import {generateUniqueElements, debounce} from './util.js';
import {createPicturesFragment} from './pictures.js';

const filters = document.querySelector('.img-filters');
const filtersForm = filters.querySelector('.img-filters__form');

const filterRandom = (pictures) => Array.from(generateUniqueElements(pictures, QUANTITY_RANDOM_PICTURES));

const filterDefault = (pictures) => Array.from(pictures.slice());

const filterDiscussed = (pictures) => Array.from(pictures.slice().sort((commentA, commentB) => commentB.comments.length - commentA.comments.length));

const removeFilterButtonActive = () => {
  document.querySelector('#filter-discussed').classList.remove('img-filters__button--active');
  document.querySelector('#filter-random').classList.remove('img-filters__button--active');
  document.querySelector('#filter-default').classList.remove('img-filters__button--active');
};

const clearPictures = () => {
  const getPicturesContainer = () => document.querySelectorAll('.picture');
  getPicturesContainer().forEach((picture) => picture.remove());
};

const renderPicturesFilter = (pictures) => {
  clearPictures();
  createPicturesFragment(pictures);
};

const filterPictures = (pictures) => {
  filters.classList.remove('img-filters--inactive');

  filtersForm.addEventListener('click',
    debounce((evt) => {
      removeFilterButtonActive();
      evt.target.classList.add('img-filters__button--active');

      if (evt.target.matches('#filter-default')) {
        renderPicturesFilter(filterDefault(pictures));
      } else if (evt.target.matches('#filter-random')) {
        renderPicturesFilter(filterRandom(pictures));
      } else if (evt.target.matches('#filter-discussed')) {
        renderPicturesFilter(filterDiscussed(pictures));
      }
    },
    TIMEOUT_DELAY),
  );
};

export {filterPictures};
