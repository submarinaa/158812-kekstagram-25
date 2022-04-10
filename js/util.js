//Модуль со вспомогательными функциями
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const generateUniqueElements = (elements, quantity) => {
  const uniqueElements = [];
  let count = 0;
  while (count < quantity) {
    let randomElement = elements[getRandomPositiveInteger(1, elements.length - 1)];

    while (uniqueElements.filter((element) => element.id === randomElement.id).length > 0) {
      randomElement = elements[getRandomPositiveInteger(1, elements.length - 1)];
    }
    uniqueElements.push(randomElement);
    count++;
  }
  return uniqueElements;
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const throttle = (callback, delayBetweenFrames) => {
  let lastTime = 0;

  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
};

const isEscapePressed = (evt) => evt.key === 'Escape';

export {isEscapePressed, generateUniqueElements, debounce, throttle};
