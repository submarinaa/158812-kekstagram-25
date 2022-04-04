import {ALERT_SHOW_TIMER} from './constants.js';

const successTemplate = document.querySelector('#success').content;
const errorTemplate = document.querySelector('#error').content;

function formSuccess() {
  const createformSuccessFragment = document.createDocumentFragment();

  createformSuccessFragment.appendChild(successTemplate.cloneNode(true));
  document.querySelector('body').appendChild(createformSuccessFragment);

  const successButton = document.querySelector('.success__button');
  const successContainer = document.querySelector('.success');
  successButton.addEventListener('click', () => {
    successContainer.remove();
  });
}

function formError() {
  const createformErrorFragment = document.createDocumentFragment();

  createformErrorFragment.appendChild(errorTemplate.cloneNode(true));
  document.querySelector('body').appendChild(createformErrorFragment);

  const errorButton = document.querySelector('.error__button');
  const errorContainer = document.querySelector('.error');
  errorButton.addEventListener('click', () => {
    errorContainer.remove();
  });
}

const showAlertMessage = (message, color) => {
  const alertMessageContainer = document.createElement('div');

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

export {showAlertMessage, formSuccess, formError};
