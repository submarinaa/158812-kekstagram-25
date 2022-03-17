const getRandomInt = function (min = 0, max = 0) {
  return Math.floor(Math.random() * (max - min) + min);
};

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

const getSuffleIntArray = function (length) {
  const arr = [];
  for (let integer = 0; integer < length; integer++) {
    arr.push(integer);
  }
  shuffle(arr);
  return arr;
};

const isEscapePressed = (evt) => evt.key === 'Escape';

export {getRandomInt, getSuffleIntArray, isEscapePressed};
