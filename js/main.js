function getRandomInt(min, max) {

  if (min < 0 || max < 0) {
    alert('Ошибка! Число не может быть меньше нуля.');
    return;
  }

  if (max <= min) {
    alert('Ошибка! Наибольшее число не может быть меньше или равно наименьшему числу.');
    return;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

getRandomInt (0, 10);
// Функция с сайта MDN: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
