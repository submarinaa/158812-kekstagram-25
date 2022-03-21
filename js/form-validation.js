// Модуль, отвечающий за валидацию формы

const hashtagInput = document.querySelector('.text__hashtags');
const MAX_HASHTAG_NUMBERS = 5;

const validateHashtag = function (currentHashTag, nextHashTag) {
  const hashtagRegExp = /(^#[A-Za-zА-Яа-яЁё0-9]{1,19})$/;
  const currentHashtag = currentHashTag.toLowerCase();
  const nextHashtag = nextHashTag.toLowerCase();

  if (currentHashTag.length === 1 && (currentHashTag === '#')) {
    hashtagInput.setCustomValidity('Хэш-тег начинается с символа #');
  }
  else if (!hashtagRegExp.test(currentHashTag)) {
    hashtagInput.setCustomValidity('строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д., максимальная длина хэш-тега 20 символов');
  }
  else if (currentHashtag === nextHashtag) {
    hashtagInput.setCustomValidity('хэш-теги нечувствительны к регистру: #ХэшТег и #хэштег считаются одним и тем же тегом, один и тот же хэш-тег не может быть использован дважды');
  }
  else {
    hashtagInput.setCustomValidity('');
  }
};

const onUploadForm = function () {
  const arrayHashtags = hashtagInput.value.split(' ');

  if (arrayHashtags.length > MAX_HASHTAG_NUMBERS) {
    hashtagInput.setCustomValidity(`Максимум ${MAX_HASHTAG_NUMBERS} хэш-тегов`);
  } else {
    for (let i = 0; i < arrayHashtags.length; i++) {
      for (let j = i + 1; j < arrayHashtags.length; j++) {
        validateHashtag(arrayHashtags[i], arrayHashtags[j]);
      }
    }
  }
};

export {onUploadForm, validateHashtag, hashtagInput};
