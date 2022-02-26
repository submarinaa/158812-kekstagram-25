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
const DESCRIPTIONS_PHOTOS = [
  'Одно из лучших фото',
  'Отличный кадр',
  'Фото в высоком качестве'
];
const MAX_ITEM_ID = 25;
const IMG_FOLDER = 'photos/';
const IMG_EXTEND = '.jpg';
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const AVATAR_FOLDER = 'img/avatar-';
const AVATAR_EXTEND = '.svg';

const getRandomInt = function (min = 0, max = 0) {
  return Math.floor(Math.random() * (max - min) + min);
};

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let counter = 0;
const getSuffleIntArray = function (length) {
  const arr = [];
  for (let integer = 0; integer < length; integer++) {
    arr.push(integer);
  }
  shuffle(arr);
  return arr;
};

const suffleArray = getSuffleIntArray(1000);
const createRandomComments = function (maxLength) {
  const result = [];
  for (let i = 0; i < maxLength; i++) {
    result.push({
      id: suffleArray[counter++],
      avatar: AVATAR_FOLDER + getRandomInt(1, 6) + AVATAR_EXTEND,
      message: MESSAGES_COMMENTS[getRandomInt(0, MESSAGES_COMMENTS.length - 1)],
      name: NAMES_USERS[getRandomInt(0, NAMES_USERS.length - 1)],
    });
  }
  return result;
};

const createRandomPhoto = function (maxLength) {
  const result = [];
  for (let i = 1; i <= maxLength; i++) {
    result.push({
      id: i,
      url: IMG_FOLDER + i + IMG_EXTEND,
      description: getRandomInt(DESCRIPTIONS_PHOTOS),
      likes: getRandomInt(MIN_LIKES, MAX_LIKES),
      comments: createRandomComments(getRandomInt(2, 5)),
    });
  }
  return result;
};

createRandomPhoto(MAX_ITEM_ID);
