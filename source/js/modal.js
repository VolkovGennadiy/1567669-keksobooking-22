const modalMain = document.querySelector('main');
const successTemplate = document.querySelector('#success').content.cloneNode(true);
const successPopup = successTemplate.querySelector('.success');
const errorTemplate = document.querySelector('#error').content;
const errorPopup = errorTemplate.querySelector('.error').cloneNode(true);
const errorButton = errorPopup.querySelector('.error__button');

const escapeKeyPress = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

const onEscKeyPress = (evt) => {
  if (escapeKeyPress(evt)) {
    evt.preventDefault();
    onModalClose()
  }
};

const onModalClose = () => {
  if (modalMain.contains(successPopup)) {
    modalMain.removeChild(successPopup)
  }
  if (modalMain.contains(errorPopup)) {
    modalMain.removeChild(errorPopup)
  }
  document.removeEventListener('keydown', onEscKeyPress)
};

const showSuccess = () => {
  successPopup.addEventListener('click', onModalClose)
  document.addEventListener('keydown',onEscKeyPress);
  modalMain.appendChild(successPopup);
};

const showError = () => {
  errorButton.addEventListener('click', onModalClose);
  errorPopup.addEventListener('click', onModalClose);
  document.addEventListener('keydown', onEscKeyPress);
  modalMain.appendChild(errorPopup);
};

export {showSuccess, showError};
