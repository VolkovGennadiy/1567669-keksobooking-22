const modalMain = document.querySelector('main');
const successTemplate = document.querySelector('#success').content.cloneNode(true);
const successPopup = successTemplate.querySelector('.success');
const errorTemplate = document.querySelector('#error').content;
const errorPopup = errorTemplate.querySelector('.error').cloneNode(true);
const errorButton = errorPopup.querySelector('.error__button');

const keyEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

const onEscKey = (evt) => {
  if (keyEvent(evt)) {
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
  document.removeEventListener('keydown', onEscKey)
};

const showSuccess = () => {
  successPopup.addEventListener('click', onModalClose)
  document.addEventListener('keydown', onEscKey);
  modalMain.appendChild(successPopup);
};

const showError = () => {
  errorButton.addEventListener('click', onModalClose);
  errorPopup.addEventListener('click', onModalClose);
  document.addEventListener('keydown', onEscKey);
  modalMain.appendChild(errorPopup);
};

export {showSuccess, showError};
