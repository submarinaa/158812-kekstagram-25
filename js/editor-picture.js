// Модуль, отвечающий за редактирование изображения
import {FILTERS_CONFIG, SCALE_STEP, MAX_SCALE_VALUE, MIN_SCALE_VALUE} from './constants.js';

const imgUploadPreview = document.querySelector('.img-upload__preview img');

const effectLevelSlider = document.querySelector('.effect-level__slider');
const effectLevelFieldset = document.querySelector('.img-upload__effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');

const scale = document.querySelector('.scale');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const scaleHiddenInput = document.querySelector('#hidden-scale');

// Наложение эффектов на изображение
const setEffect = (effect) => {
  effectLevelSlider.noUiSlider.updateOptions(effect.options);
  effectLevelSlider.noUiSlider.on('update', (values, handle) => {
    imgUploadPreview.style.filter = `${effect.style}(${values[handle]}${effect.unit})`;
    effectLevelValue.value = values[handle];
  });
};

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const changeEffect = (value) => {
  effectLevelFieldset.style.display = 'block';
  setEffect(FILTERS_CONFIG[value]);
};

const unsetEffect = () => {
  imgUploadPreview.className = '';
  imgUploadPreview.style.filter = 'none';
  effectLevelValue.value = 'none';
  imgUploadPreview.classList.add('effects__preview--none');
  effectLevelFieldset.style.display = 'none';
};

const onEffectsChange = (evt) => {
  if (evt.target.matches('input[type="radio"]')) {
    imgUploadPreview.className = '';
    imgUploadPreview.classList.add(`effects__preview--${evt.target.value}`);
    if (evt.target.value === 'none') {
      unsetEffect();
    } else {
      changeEffect(evt.target.value);
    }
  }
};

//Масштаб изображения
const changeScale = (index) => {
  scaleHiddenInput.value = Number(scaleHiddenInput.value) + index * (MIN_SCALE_VALUE / MAX_SCALE_VALUE);
  scaleValue.value = `${parseInt(scaleValue.value, 10) + index * SCALE_STEP}%`;
  imgUploadPreview.style.transform = `scale(${scaleHiddenInput.value})`;
};

const largingScale = () => {
  if (scaleHiddenInput.value !== '1') {
    changeScale(1);
  }
};

const smallingScale = () => {
  if (scaleHiddenInput.value !== '0.25') {
    changeScale(-1);
  }
};

const onScaleChange = (evt) => {
  if (evt.target === scaleBigger) {
    largingScale();
  }
  if (evt.target === scaleSmaller) {
    smallingScale();
  }
};

const resetImageScale = () => {
  scaleValue.value = '100%';
  scaleHiddenInput.value = '1';
  imgUploadPreview.style.transform = `scale(${scaleHiddenInput.value})`;
};

export {onEffectsChange, unsetEffect, scale, onScaleChange, resetImageScale};
