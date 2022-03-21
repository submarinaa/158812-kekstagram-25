//Модуль, отвечающий за загрузку изображения

import {isEscapePressed} from './util.js';
import {body} from './render-big-pictures.js';
import {onUploadForm, hashtagInput} from './form-validation.js';

const ImageEditor = document.querySelector('.img-upload__overlay');
const textarea = ImageEditor.querySelector('.text__description');
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const formUploadImage = document.querySelector('#upload-select-image');

const cleanUploadFile = function () {
  uploadFile.value = '';
};

const openImageEditor = function () {
  ImageEditor.classList.remove('hidden');
  body.classList.add('modal-open');
};

const closeImageEditor = function () {
  ImageEditor.classList.add('hidden');
  body.classList.remove('modal-open');
  cleanUploadFile();
};

const closeImageEditorEsc = function (evt) {
  if (isEscapePressed(evt) && (textarea !== document.activeElement) && (hashtagInput !== document.activeElement)) {
    closeImageEditor();
  }
};

uploadFile.addEventListener('change', () => {
  openImageEditor();
});

uploadCancel.addEventListener('click', () => {
  closeImageEditor();
});

document.addEventListener('keydown', () => {
  closeImageEditorEsc();
});

formUploadImage.addEventListener('input', () => {
  onUploadForm();
});

export {cleanUploadFile, openImageEditor, closeImageEditor, closeImageEditorEsc};
