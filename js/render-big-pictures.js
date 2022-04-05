// Модуль, отвечающий за отрисовку окна с полноразмерным изображением
import {isEscapePressed} from './util.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('.big-picture img');
const bigPictureCloseButton = bigPicture.querySelector('.big-picture__cancel');
const social = document.querySelector('.big-picture__social');
const socialCaption = social.querySelector('.social__caption');
const socialCommentCount = social.querySelector('.social__comment-count');
const commentsLoader = social.querySelector('.comments-loader');
const likesCount = social.querySelector('.likes-count');

let commentsCount;

const createComments = function (picture, socialComment, pictureFragment, socialComments) {
  let breakBtn = 0;

  picture.comments.forEach(({ avatar, name, message }) => {
    if (breakBtn === commentsCount) {
      return;
    }
    const commentItem = socialComment.cloneNode(true);
    commentItem.querySelector('.social__picture').src = avatar;
    commentItem.querySelector('.social__picture').alt = name;
    commentItem.querySelector('.social__text').textContent = message;
    pictureFragment.appendChild(commentItem);
    breakBtn++;
  });

  socialComments.replaceChildren(pictureFragment);
};

const onShowBigPictureEscape = (evt) => {
  if (isEscapePressed(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const renderBigPicture = function (picture) {
  const socialComment = social.querySelector('.social__comment');
  const socialComments = social.querySelector('.social__comments');
  const pictureFragment = document.createDocumentFragment();

  commentsLoader.classList.remove('hidden');

  commentsCount = 5;
  if (commentsCount >= picture.comments.length) {
    commentsCount = picture.comments.length;
    commentsLoader.classList.add('hidden');
  }

  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');

  document.addEventListener('keydown', onShowBigPictureEscape);

  socialCommentCount.classList.remove('hidden');
  bigPictureImage.src = picture.url;
  socialCaption.textContent = picture.description;
  likesCount.textContent = picture.likes;
  socialCommentCount.textContent = `${commentsCount} из ${picture.comments.length} комментариев`;
  socialComments.replaceChildren(pictureFragment);
  createComments(picture, socialComment, pictureFragment, socialComments);

  const onClickListener = () => {
    commentsCount += 5;
    if (commentsCount >= picture.comments.length) {
      commentsCount = picture.comments.length;
      closeClickListener();
    }
    socialCommentCount.textContent = `${commentsCount} из ${picture.comments.length} комментариев`;
    createComments(picture, socialComment, pictureFragment, socialComments);
  };

  function closeClickListener() {
    commentsLoader.classList.add('hidden');
    commentsLoader.removeEventListener('click', onClickListener);
  }

  commentsLoader.addEventListener('click', onClickListener);
};

const onBigPictureCloseButtonClick = () => {
  closeBigPicture();
};

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  bigPictureCloseButton.removeEventListener('click', onBigPictureCloseButtonClick);
  document.removeEventListener('keydown', onShowBigPictureEscape);
}

bigPictureCloseButton.addEventListener('click', () => {
  closeBigPicture();
});

export {renderBigPicture, closeBigPicture, body};
