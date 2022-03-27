import {IMG_FOLDER, IMG_EXTEND, MIN_LIKES, MAX_LIKES, AVATAR_FOLDER, AVATAR_EXTEND, MESSAGES_COMMENTS, NAMES_USERS} from './constants.js';
import {getRandomInt, getSuffleIntArray} from './util.js';

const suffleArray = getSuffleIntArray(1000);
const createRandomComments = function (maxLength) {
  const result = [];
  let counter = 0;
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
      description: 'Одно из лучших фото',
      likes: getRandomInt(MIN_LIKES, MAX_LIKES),
      comments: createRandomComments(getRandomInt(2, 25)),
    });
  }
  return result;
};

export {createRandomPhoto};
