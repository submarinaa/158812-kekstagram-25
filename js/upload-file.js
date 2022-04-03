//Модуль, отвечающий за загрузку изображения
import {isEscapePressed, stopEscPropagation} from './util.js';
import {hashtagInput, textarea, formUploadImage, pristine, onUploadForm} from './form-validation.js';
import {body} from './render-big-pictures.js';
import {onEffectsChange, unsetEffect, scale, onScaleChange, resetImageScale} from './editor-picture.js';

const imageEditor = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadSubmit = document.querySelector('#upload-submit');
const uploadCancel = document.querySelector('#upload-cancel');
const previewImg = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');
const cancel = document.querySelector('.img-upload__cancel');
const text = document.querySelector('.text');

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

const disabledSubmit = () => {
  uploadSubmit.classList.add('img-upload__submit--disabled');
  uploadSubmit.disabled = true;
};

const undisabledSubmit = () => {
  uploadSubmit.classList.remove('img-upload__submit--disabled');
  uploadSubmit.disabled = false;
};

const checkValidateSubmit = () => {
  if (text.classList.contains('text--invalid')) {
    disabledSubmit();
  } else if (text.classList.contains('text--valid')) {
    undisabledSubmit();
  }
};

const showImage = () => {
  undisabledSubmit();

  previewImg.onload = () => {
    URL.revokeObjectURL(previewImg.src);
  };
  previewImg.src = URL.createObjectURL(uploadFile.files[0]);

  scale.addEventListener('click', onScaleChange);
  effectsList.addEventListener('change', onEffectsChange);

  cancel.addEventListener('click', hideImage);
  text.addEventListener('change', checkValidateSubmit);
  formUploadImage.addEventListener('submit', onUploadForm);
  textarea.addEventListener('keydown', stopEscPropagation);
  hashtagInput.addEventListener('keydown', stopEscPropagation);
};

function hideImage () {
  disabledSubmit();

  previewImg.src = 'img/upload-default-image.jpg';

  scale.removeEventListener('click', onScaleChange);
  effectsList.removeEventListener('change', onEffectsChange);

  cancel.removeEventListener('click', hideImage);
  text.removeEventListener('change', checkValidateSubmit);
  formUploadImage.removeEventListener('submit', onUploadForm);
  textarea.removeEventListener('keydown', stopEscPropagation);
  hashtagInput.removeEventListener('keydown', stopEscPropagation);
}

uploadFile.addEventListener('change', showImage);

export {cleanUploadFile, openImageEditor, onCloseImageEditor, imageEditor, uploadSubmit, hideImage};
