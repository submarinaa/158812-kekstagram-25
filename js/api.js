// // Модуль для получения и отправки данных на удалённый сервер
import {DATA_URL} from './constants.js';

const getServerData = (onSuccess, onError) => {
  fetch(DATA_URL)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    })
    .catch((err) => {
      //onError(err);
    });
};

export {getServerData};
