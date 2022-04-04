import {ALERT_SHOW_TIMER} from './constants.js';
import {isEscapePressed} from './util.js';

const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');
const successMessageContainer = successMessageTemplate.cloneNode(true);
const successCloseButton = successMessageContainer.querySelector('.success__button');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error');
const errorMessageContainer = errorMessageTemplate.cloneNode(true);
const errorCloseButton = errorMessageContainer.querySelector('.error__button');

const alertMessageContainer = document.createElement('div');

//Сообщение об успешной загрузке изображения
const onSuccessMessageEscKeydown = (evt) => {
  if (isEscapePressed(evt)) {
    evt.preventDefault();
    closeMessageSuccess();
  }
};

const onSuccessCloseButtonClick = () => {
  closeMessageSuccess();
};

function closeMessageSuccess () {
  successMessageContainer.remove();
  successCloseButton.removeEventListener('click', onSuccessCloseButtonClick);
  document.removeEventListener('keydown', onSuccessMessageEscKeydown);
}

const openSuccessMessage = () => {
  document.body.append(successMessageContainer);

  successCloseButton.addEventListener('click', onSuccessCloseButtonClick);
  document.addEventListener('keydown', onSuccessMessageEscKeydown);
};

//Сообщение с ошибкой загрузки изображения
const onErrorMessageEscKeydown = (evt) => {
  if (isEscapePressed(evt)) {
    evt.preventDefault();
    closeErrorMessage();
  }
};

const onErrorCloseButtonClick = () => {
  closeErrorMessage();
};

const openErrorMessage = () => {
  document.body.append(errorMessageContainer);

  errorCloseButton.addEventListener('click', onErrorCloseButtonClick);
  document.addEventListener('keydown', onErrorMessageEscKeydown);
};

function closeErrorMessage() {
  errorMessageContainer.remove();
  errorCloseButton.removeEventListener('click', onErrorCloseButtonClick);
  document.removeEventListener('keydown', onErrorMessageEscKeydown);
}

const showAlertMessage = (message, color) => {
  alertMessageContainer.style.zIndex = 10;
  alertMessageContainer.style.position = 'absolute';
  alertMessageContainer.style.top = 0;
  alertMessageContainer.style.right = 0;
  alertMessageContainer.style.width = '320px';
  alertMessageContainer.style.padding = '36px';
  alertMessageContainer.style.fontSize = '16px';
  alertMessageContainer.style.lineHeight = '1.5';
  alertMessageContainer.style.textTransform = 'none';

  alertMessageContainer.style.backgroundColor = color;
  alertMessageContainer.textContent = message;

  document.body.append(alertMessageContainer);

  setTimeout(() => {
    alertMessageContainer.remove();
  }, ALERT_SHOW_TIMER);
};

export {showAlertMessage, openErrorMessage, openSuccessMessage};
