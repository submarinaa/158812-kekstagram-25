// Модуль, отвечающий за валидацию формы
import {imageEditor} from './upload-file.js';

const hashtagInput = document.querySelector('.text__hashtags');
const textarea = imageEditor.querySelector('.text__description');
const formUploadImage = document.querySelector('#upload-select-image');

const MAX_DESCRIPTION = 140;
const MAX_HASHTAGS = 5;
const re = /^#[A-Za-zА-Яа-яЕё0-9]{1,19}$/;

const pristine = new Pristine(formUploadImage, {
  classTo: 'text',
  errorClass: 'text--invalid',
  successClass: 'text--valid',
  errorTextParent: 'text',
  errorTextTag: 'p',
  errorTextClass: 'text__error'
}, true);

//Максимальная длина комментария - не более 140
const validateDescription = (str) => {
  if(str.length >= 1 && str.length <= MAX_DESCRIPTION - 1) {
    textarea.style.outline = '';
    return true;
  }
  textarea.style.outline = '2px solid red';
};
pristine.addValidator(textarea, validateDescription, `Комментарий максимум ${MAX_DESCRIPTION} символов`);

const getHashtags = (str) => {
  if(str) {
    const hashtags = str.split(/\s+/g);
    if(hashtags[0] === '') {
      hashtags.shift();
    }
    if(hashtags[hashtags.length - 1] === '') {
      hashtags.pop();
    }
    return hashtags;
  }
};

//Количество хэш-тегов - не более 5
const checkCountHashtags = (tags) => {
  if(tags.length === 0) {
    return true;
  }
  return getHashtags(tags).length <= MAX_HASHTAGS;
};
pristine.addValidator(hashtagInput, checkCountHashtags, `Максимум ${MAX_HASHTAGS} хэш-тегов`);

//строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.
const validateString = (str) => {
  if (str.length === 0) {
    hashtagInput.style.outline = '';
    return true;
  }
  const hashtags = getHashtags(str);
  const results = [];
  hashtags.forEach((element) => {
    results.push(re.test(element));
  });
  return results.indexOf(false) === -1;
};
pristine.addValidator(hashtagInput, validateString, 'Хэш-тег должен состоять только из букв и чисел, должен начинаться с #');

//Отсутствие одинаковых хэш-тегов
const checkHashtagsDuplicate = (value) => {
  const splitStrings = (str) => str.trim().toLowerCase().split(' ').filter((tag) => (tag !== ''));
  const hashtags = splitStrings(value);
  return !(hashtags.some((tag, index) => hashtags.indexOf(tag) !== index));
};
pristine.addValidator(hashtagInput, checkHashtagsDuplicate, 'Такой хэш-тег уже существует');

const onUploadForm = (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
    pristine.reset();
  }
  formUploadImage.submit();
};

export {onUploadForm, hashtagInput, formUploadImage, textarea, pristine};
