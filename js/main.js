// Функция с сайта MDN: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomInt = function(min, max) {
  if(min >= 0 && max >= 0) {
    return Math.random() * (max - min) + min;
  }

  return 'число меньше нуля';
};

const getLengthString = function(string, maxLength) {
  if(string.length <= maxLength) {
    return true;
  }

  return false;
};

getRandomInt (1, 10);
getLengthString('Строка, не более 140 символов', 140);
