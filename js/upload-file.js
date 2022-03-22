//Модуль, отвечающий за загрузку изображения
import {isEscapePressed} from './util.js';
import {hashtagInput, textarea} from './form-validation.js';
import {body} from './render-big-pictures.js';

const imageEditor = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');

const cleanUploadFile = function () {
  uploadFile.value = '';
};

const openImageEditor = function () {
  imageEditor.classList.remove('hidden');
  body.classList.add('modal-open');
};

const closeImageEditor = function () {
  imageEditor.classList.add('hidden');
  body.classList.remove('modal-open');
  cleanUploadFile();
};


uploadFile.addEventListener('change', () => {
  openImageEditor();
});

uploadCancel.addEventListener('click', () => {
  closeImageEditor();
});

document.addEventListener('keydown', (evt) => {
  if (isEscapePressed(evt) && evt.target !== hashtagInput && evt.target !== textarea) {
    evt.preventDefault();
    closeImageEditor();
  }
});

export {cleanUploadFile, openImageEditor, closeImageEditor, imageEditor};
