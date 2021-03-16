const successTemplate = document.querySelector('#success').content.querySelector('.success');
const succesModalOpen = successTemplate.cloneNode(true);
document.querySelector('main').append(succesModalOpen);
succesModalOpen.classList.add('hidden');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorModalOpen = errorTemplate.cloneNode(true);
document.querySelector('main').append(errorModalOpen);
errorModalOpen.classList.add('hidden');

const hiddenModalOpen = (modal) => {
  modal.classList.add('hidden');

  modal.removeEventListener('click', () => {
    hiddenModalOpen(modal);
  });

  window.removeEventListener('keydown', (evt) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      hiddenModalOpen(modal)
    }
  });
};

const showModalOpen = (modal) => {
  modal.classList.remove('hidden');

  modal.addEventListener('click', () => {
    showModalOpen(modal);
  });

  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      showModalOpen(modal)
    }
  });
};

export {succesModalOpen, errorModalOpen, hiddenModalOpen, showModalOpen};
