const mapFilterHousing = document.querySelector('#type');
const formInputPrice = document.querySelector('#price');
const formInputTimeIn = document.querySelector('#timein');
const formInpuTimeOut = document.querySelector('#timeout');
const formDisabled = document.querySelector('.ad-form');
const formElements = formDisabled.querySelectorAll('input, select, textarea, buttun');
const mapFormDisabled = document.querySelector('.map__filters');
const mapFormElements = mapFormDisabled.querySelectorAll('input, select');
const formRoomNumber = formDisabled.querySelector('#room_number')
const formCapacity = formDisabled.querySelector('#capacity');

formRoomNumber.addEventListener('change', (evt) => {
  switch (evt.target.value) {
    case '1':
      formCapacity.options[0].disabled = true;
      formCapacity.options[1].disabled = true;
      formCapacity.options[2].disabled = false;
      formCapacity.options[3].disabled = true;
      formCapacity.options[2].selected = true;
      break;
    case '2':
      formCapacity.options[0].disabled = true;
      formCapacity.options[1].disabled = false;
      formCapacity.options[2].disabled = false;
      formCapacity.options[3].disabled = true;
      formCapacity.options[1].selected = true;
      break;
    case '3':
      formCapacity.options[0].disabled = false;
      formCapacity.options[1].disabled = false;
      formCapacity.options[2].disabled = false;
      formCapacity.options[3].disabled = true;
      formCapacity.options[0].selected = true;
      break;
    case '100':
      formCapacity.options[0].disabled = true;
      formCapacity.options[1].disabled = true;
      formCapacity.options[2].disabled = true;
      formCapacity.options[3].disabled = false;
      formCapacity.options[3].selected = true;
      break;
    default:
      formCapacity.options[0].disabled = false;
      formCapacity.options[1].disabled = false;
      formCapacity.options[2].disabled = false;
      formCapacity.options[3].disabled = false;
  }
});

const MinPrices = {
  BUNGALOW: 0,
  FLAT: 1000,
  HOUSE: 5000,
  PALACE: 10000,
};

mapFilterHousing.addEventListener('change', () => {
  formInputPrice.placeholder = MinPrices[mapFilterHousing.value.toUpperCase()];
  formInputPrice.min = MinPrices[mapFilterHousing.value.toUpperCase()];
});

formInputTimeIn.addEventListener('change', () => {
  formInpuTimeOut.value = formInputTimeIn.value;
});

formInpuTimeOut.addEventListener('change', () => {
  formInputTimeIn.value = formInpuTimeOut.value;
});

formDisabled.classList.add('ad-form--disabled');
mapFormDisabled.classList.add('map__filters--disabled');
formElements.forEach(formElements => formElements.setAttribute('disabled', 'disabled'));
mapFormElements.forEach(mapFormElements => mapFormElements.setAttribute('disabled', 'disabled'));

export {formDisabled, formElements, mapFormElements, mapFormDisabled, formRoomNumber, formCapacity};
