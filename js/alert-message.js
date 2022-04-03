import {ALERT_SHOW_TIMER} from './constants.js';

const showAlertMessage = (message, color) => {
  const alertMessageContainer = document.createElement('div');

  alertMessageContainer.style.zIndex = 10;
  alertMessageContainer.style.position = 'absolute';
  alertMessageContainer.style.bottom = 0;
  alertMessageContainer.style.right = 0;
  alertMessageContainer.style.padding = '36px';
  alertMessageContainer.style.fontSize = '18px';
  alertMessageContainer.style.lineHeight = '1.5';
  alertMessageContainer.style.textAlign = 'left';
  alertMessageContainer.style.width = '360px';
  alertMessageContainer.style.textTransform = 'none';

  alertMessageContainer.style.backgroundColor = color;
  alertMessageContainer.textContent = message;

  document.body.append(alertMessageContainer);

  setTimeout(() => {
    alertMessageContainer.remove();
  }, ALERT_SHOW_TIMER);
};

export {showAlertMessage};
