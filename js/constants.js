const MESSAGES_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAMES_USERS = [
  'Артём',
  'Петя',
  'Ольга',
  'Светлана'
];
const MAX_ITEM_ID = 25;
const IMG_FOLDER = 'photos/';
const IMG_EXTEND = '.jpg';
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const AVATAR_FOLDER = 'img/avatar-';
const AVATAR_EXTEND = '.svg';

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

export {MESSAGES_COMMENTS, NAMES_USERS, MAX_ITEM_ID, IMG_FOLDER, IMG_EXTEND, MIN_LIKES, MAX_LIKES, AVATAR_FOLDER, AVATAR_EXTEND, MAX_DESCRIPTION, MAX_HASHTAGS, FILTERS_CONFIG, SCALE_STEP, MAX_SCALE_VALUE, MIN_SCALE_VALUE};
