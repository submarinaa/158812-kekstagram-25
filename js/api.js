// Модуль для получения и отправки данных на удалённый сервер
import {DATA_URL} from './constants.js';
import {showAlertMessage} from './message.js';

const getServerData = (onSuccess) => {
  fetch(DATA_URL)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((response) => response.json())
    .then((picturesData) => {
      onSuccess(picturesData);
      showAlertMessage('Все данные успешно загружены!', 'green');
    })
    .catch(() => {
      showAlertMessage('Ошибка загрузки данных', 'red');
    });
};

export {getServerData};
