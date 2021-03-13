const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const succesModalOpen = successTemplate.cloneNode(true);
const errorModalOpen = errorTemplate.cloneNode(true);
document.querySelector('main').append(succesModalOpen);
document.querySelector('main').append(errorModalOpen);
succesModalOpen.classList.add('hidden');
errorModalOpen.classList.add('hidden');

const hiddenModlaOpen = (modal) => {
  modal.classList.add('hidden');

  modal.removeEventListener('click', () => {
    hiddenModlaOpen(modal);
  });

  window.removeEventListener('keydown', (evt) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      hiddenModlaOpen(modal)
    }
  });
};

const showModlaOpen = (modal) => {
  modal.classList.remove('hidden');

  modal.addEventListener('click', () => {
    showModlaOpen(modal);
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      showModlaOpen(modal)
    }
  });
};

export {succesModalOpen, errorModalOpen, hiddenModlaOpen, showModlaOpen};
