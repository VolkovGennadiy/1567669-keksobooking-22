const mapFilterHousing = document.querySelector('#housing-type');
const formInputPrice = document.querySelector('#price');
const formInputTimeIn = document.querySelector('#timein');
const formInpuTimeOut = document.querySelector('#timeout');

const MIN_PRICES = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

mapFilterHousing.addEventListener('change', () => {
  formInputPrice.placeholder = MIN_PRICES[mapFilterHousing.value];
  formInputPrice.min = MIN_PRICES[mapFilterHousing.value];
});

formInputTimeIn.addEventListener('change', () => {
  formInpuTimeOut.value = formInputTimeIn.value;
});

formInpuTimeOut.addEventListener('change', () => {
  formInputTimeIn.value = formInpuTimeOut.value;
});


