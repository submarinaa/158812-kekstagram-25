// Модуль, отвечающий за отрисовку миниатюр
import {renderBigPicture} from './render-big-pictures.js';

const picturesContainer = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createPicturesFragment = (picturesData) => {
  const pictureFragment = document.createDocumentFragment();

  picturesData.forEach((pictureData) => {
    const pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__comments').textContent = pictureData.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = pictureData.likes;
    pictureElement.querySelector('.picture__img').src = pictureData.url;

    pictureFragment.appendChild(pictureElement);

    pictureElement.addEventListener('click', () => {
      renderBigPicture(pictureData);
    });
  });
  picturesContainer.appendChild(pictureFragment);
};

export {createPicturesFragment};
