// Модуль для получения данных с удалённого сервера
import {DATA_URL} from './constants.js';
import {showAlertMessage} from './message.js';

const getServerData = (onSuccess, onFiltering) => {
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
      return picturesData;
    })
    .then((picturesData) => {
      onFiltering(picturesData);
    })
    .catch(() => {
      showAlertMessage('Ошибка загрузки данных', 'red');
    });
};

export {getServerData};
