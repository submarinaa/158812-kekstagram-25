//Модуль, отвечающий за загрузку изображения
import {isEscapePressed} from './util.js';
import {hashtagInput, textarea, formUploadImage, pristine, uploadForm} from './form-validation.js';
import {body} from './render-big-pictures.js';
import {onChangeEffect, resetEffect, scale, onChangeScale, resetImageScale} from './editor-picture.js';

const imageEditor = document.querySelector('.img-upload__overlay');
const uploadFile = document.querySelector('#upload-file');
const uploadSubmit = document.querySelector('#upload-submit');
const uploadCancel = document.querySelector('#upload-cancel');
const previewImg = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');
const text = document.querySelector('.text');

const cleanUploadFile = () => {
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
    // eslint-disable-next-line no-use-before-define
    onCloseImageEditor();
  }
};

const onCloseImageEditor = () => {
  disabledSubmit();
  imageEditor.classList.add('hidden');
  body.classList.remove('modal-open');

  cleanUploadFile();

  previewImg.src = 'img/upload-default-image.jpg';

  scale.removeEventListener('click', onChangeScale);
  effectsList.removeEventListener('change', onChangeEffect);

  document.removeEventListener('keydown', onCloseImageEditorEscape);
  text.removeEventListener('change', onCheckValidateSubmit);
  formUploadImage.removeEventListener('submit', uploadForm);
};

const openImageEditor = () => {
  undisabledSubmit();
  imageEditor.classList.remove('hidden');
  body.classList.add('modal-open');

  previewImg.onload = () => {
    URL.revokeObjectURL(previewImg.src);
  };
  previewImg.src = URL.createObjectURL(uploadFile.files[0]);

  resetEffect();
  resetImageScale();

  scale.addEventListener('click', onChangeScale);
  effectsList.addEventListener('change', onChangeEffect);

  document.addEventListener('keydown', onCloseImageEditorEscape);
  text.addEventListener('change', onCheckValidateSubmit);
  formUploadImage.addEventListener('submit', uploadForm);
};

uploadFile.addEventListener('change', () => {
  openImageEditor();
});

uploadCancel.addEventListener('click', () => {
  onCloseImageEditor();
});

export {cleanUploadFile, openImageEditor, onCloseImageEditor, imageEditor, uploadSubmit};
