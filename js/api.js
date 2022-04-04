// Модуль для получения и отправки данных на удалённый сервер
import {DATA_URL} from './constants.js';
import {showAlertMessage} from './alert-message.js';
import {createPicturesFragment, getImagesData} from './pictures.js';

const getServerData = () => {
  fetch(
    DATA_URL,
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`${response.status} ${response.statusText}`);
    })
    .then((images) => {
      getImagesData(images);
      createPicturesFragment(images);

      showAlertMessage('Все данные успешно загружены!', 'green');
    })
    .catch(() => {
      showAlertMessage('Ошибка загрузки данных', 'red');
    });
};

export {getServerData};
