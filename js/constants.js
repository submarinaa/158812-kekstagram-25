const MAX_DESCRIPTION = 140;
const MAX_HASHTAGS = 5;

const FILTERS_CONFIG = {
  chrome: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'grayscale',
    unit: '',
  },

  sepia: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'sepia',
    unit: '',
  },

  marvin: {
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
    style: 'invert',
    unit: '%',
  },

  phobos: {
    options: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'blur',
    unit: 'px',
  },

  heat: {
    options: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'brightness',
    unit: '',
  },
};

const SCALE_STEP = 25;
const MAX_SCALE_VALUE = 100;
const MIN_SCALE_VALUE = 25;

const DATA_URL = 'https://25.javascript.pages.academy/kekstagram/data';
const SERVER_URL = 'https://25.javascript.pages.academy/kekstagram';

const ALERT_SHOW_TIMER = 5000;

const QUANTITY_RANDOM_PICTURES = 10;
const TIMEOUT_DELAY = 500;

export {MAX_DESCRIPTION, MAX_HASHTAGS, FILTERS_CONFIG, SCALE_STEP, MAX_SCALE_VALUE, MIN_SCALE_VALUE, DATA_URL, SERVER_URL, ALERT_SHOW_TIMER, QUANTITY_RANDOM_PICTURES, TIMEOUT_DELAY};
