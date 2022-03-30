//Модуль, отвечающий за загрузку изображения
import {isEscapePressed} from './util.js';
import {hashtagInput, textarea, formUploadImage, pristine} from './form-validation.js';
import {body} from './render-big-pictures.js';
import {onEffectsChange, unsetEffect, scale, onScaleChange, resetImageScale} from './editor-picture.js';

const imageEditor = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const effectsList = document.querySelector('.effects__list');

const cleanUploadFile = function () {
  formUploadImage.reset();
  uploadFile.value = '';
  pristine.reset();
};

const onCloseImageEditorEscape = (evt) => {
  if (isEscapePressed(evt) && evt.target !== hashtagInput && evt.target !== textarea) {
    evt.preventDefault();
    onCloseImageEditor();
  }
};

function onCloseImageEditor() {
  imageEditor.classList.add('hidden');
  body.classList.remove('modal-open');

  cleanUploadFile();

  scale.removeEventListener('click', onScaleChange);
  document.removeEventListener('keydown', onCloseImageEditorEscape);
  effectsList.removeEventListener('change', onEffectsChange);
}

const openImageEditor = function () {
  imageEditor.classList.remove('hidden');
  body.classList.add('modal-open');

  unsetEffect();
  resetImageScale();

  scale.addEventListener('click', onScaleChange);
  effectsList.addEventListener('change', onEffectsChange);
  document.addEventListener('keydown', onCloseImageEditorEscape);
};

uploadFile.addEventListener('change', () => {
  openImageEditor();
});

uploadCancel.addEventListener('click', () => {
  onCloseImageEditor();
});

export {cleanUploadFile, openImageEditor, onCloseImageEditor, imageEditor};
