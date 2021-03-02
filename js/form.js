const mapFilterHousing = document.querySelector('#type');
const formInputPrice = document.querySelector('#price');
const formInputTimeIn = document.querySelector('#timein');
const formInpuTimeOut = document.querySelector('#timeout');
const formDisabled = document.querySelector('.ad-form');
const formElements = formDisabled.querySelectorAll('input, select, textarea, buttun');
const mapFormDisabled = document.querySelector('.map__filters');
const mapFormElements = mapFormDisabled.querySelectorAll('input, select');

const MinPrices = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

mapFilterHousing.addEventListener('change', () => {
  formInputPrice.placeholder = MinPrices[mapFilterHousing.value];
  formInputPrice.min = MinPrices[mapFilterHousing.value];
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

export {formDisabled, formElements, mapFormElements, mapFormDisabled};
