//Модуль, отвечающий за загрузку изображения
import {isEscapePressed} from './util.js';
import {hashtagInput, textarea, formUploadImage, pristine, onUploadForm} from './form-validation.js';
import {body} from './render-big-pictures.js';
import {onEffectsChange, unsetEffect, scale, onScaleChange, resetImageScale} from './editor-picture.js';

const imageEditor = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadSubmit = document.querySelector('#upload-submit');
const uploadCancel = document.querySelector('#upload-cancel');
const previewImg = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');
const text = document.querySelector('.text');

const cleanUploadFile = function () {
  formUploadImage.reset();
  uploadFile.value = '';
  pristine.reset();
};

const disabledSubmit = () => {
  uploadSubmit.classList.add('img-upload__submit--disabled');
  uploadSubmit.disabled = true;
};

const undisabledSubmit = () => {
  uploadSubmit.classList.remove('img-upload__submit--disabled');
  uploadSubmit.disabled = false;
};

const onCheckValidateSubmit = () => {
  if (text.classList.contains('text--invalid')) {
    disabledSubmit();
  } else if (text.classList.contains('text--valid')) {
    undisabledSubmit();
  }
};

const onCloseImageEditorEscape = (evt) => {
  if (isEscapePressed(evt) && evt.target !== hashtagInput && evt.target !== textarea) {
    evt.preventDefault();
    onCloseImageEditor();
  }
};

function onCloseImageEditor() {
  disabledSubmit();
  imageEditor.classList.add('hidden');
  body.classList.remove('modal-open');

  cleanUploadFile();

  previewImg.src = 'img/upload-default-image.jpg';

  scale.removeEventListener('click', onScaleChange);
  effectsList.removeEventListener('change', onEffectsChange);

  document.removeEventListener('keydown', onCloseImageEditorEscape);
  text.removeEventListener('change', onCheckValidateSubmit);
  formUploadImage.removeEventListener('submit', onUploadForm);
}

const openImageEditor = function () {
  undisabledSubmit();
  imageEditor.classList.remove('hidden');
  body.classList.add('modal-open');

  previewImg.onload = () => {
    URL.revokeObjectURL(previewImg.src);
  };
  previewImg.src = URL.createObjectURL(uploadFile.files[0]);

  unsetEffect();
  resetImageScale();

  scale.addEventListener('click', onScaleChange);
  effectsList.addEventListener('change', onEffectsChange);

  document.addEventListener('keydown', onCloseImageEditorEscape);
  text.addEventListener('change', onCheckValidateSubmit);
  formUploadImage.addEventListener('submit', onUploadForm);
};

uploadFile.addEventListener('change', () => {
  openImageEditor();
});

uploadCancel.addEventListener('click', () => {
  onCloseImageEditor();
});

export {cleanUploadFile, openImageEditor, onCloseImageEditor, imageEditor, uploadSubmit};
