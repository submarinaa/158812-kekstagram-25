// Модуль, отвечающий за отрисовку окна с полноразмерным изображением
import {isEscapePressed} from './util.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture img');
const bigPictureCloseButton = bigPicture.querySelector('.big-picture__cancel');
const social = document.querySelector('.big-picture__social');
const socialCaption = social.querySelector('.social__caption');
const socialComment = social.querySelector('.social__comment');
const socialComments = social.querySelector('.social__comments');
const socialCommentCount = social.querySelector('.social__comment-count');
const commentsLoader = social.querySelector('.comments-loader');
const likesCount = social.querySelector('.likes-count');
const commentsCount = social.querySelector('.comments-count');

const renderBigPicture = function (picture) {
  const pictureFragment = document.createDocumentFragment();

  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  bigPictureImage.src = picture.url;
  likesCount.textContent = picture.likes;
  commentsCount.textContent = picture.comments.length;
  socialCaption.textContent = picture.description;

  picture.comments.forEach(({ avatar, name, message }) => {
    const commentItem = socialComment.cloneNode(true);

    commentItem.querySelector('.social__picture').src = avatar;
    commentItem.querySelector('.social__picture').alt = name;
    commentItem.querySelector('.social__text').textContent = message;

    pictureFragment.appendChild(commentItem);
  });

  socialComments.replaceChildren(pictureFragment);
};

bigPictureCloseButton.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
});

document.addEventListener('keydown', (evt) => {
  if (isEscapePressed(evt)) {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
  }
});

export {renderBigPicture, body};
