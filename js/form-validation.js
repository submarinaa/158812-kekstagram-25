// Модуль, отвечающий за валидацию формы

import {imageEditor} from './upload-file.js';

const hashtagInput = document.querySelector('.text__hashtags');
const textarea = imageEditor.querySelector('.text__description');
const formUploadImage = document.querySelector('#upload-select-image');
const MAX_DESCRIPTION = 140;
const MAX_HASHTAGS = 5;
const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const pristine = new Pristine(formUploadImage, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'p',
  errorTextClass: 'field__error'
});

const getHashtags = (str) => str.split(' ').map((element) => element.toLowerCase());

//Количество хэш-тегов - не более 5
const checkCountHashtags = (tags) => tags.length <= MAX_HASHTAGS;

//Максимальная длина комментария - не более 140
const validateDescription = (str) => str.length >= 1 && str.length <= MAX_DESCRIPTION;

//Отсутствие одинаковых хэш-тегов
const checkHashtagsRepeat = (tags) => (tags.every((element) => tags.indexOf(element) === tags.lastIndexOf(element)));

const validateHashtags = (value) => getHashtags(value).every((element, index, array) =>
  re.test(element) && checkCountHashtags(array) && checkHashtagsRepeat(array)
);

pristine.addValidator(hashtagInput, validateHashtags, 'Введено невалидное значение хэш-тега');
pristine.addValidator(textarea, validateDescription, 'Длина комментария максимум 140 символов');

const onUploadFormSubmit = (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
  formUploadImage.submit();
};

export {onUploadFormSubmit, hashtagInput, formUploadImage, textarea};
