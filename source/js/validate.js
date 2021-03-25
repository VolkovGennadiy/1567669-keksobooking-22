const headline = document.querySelector('#title');
const MIN_HEADLINE_LENGTH = 30;
const MAX_HEADLINE_LENGTH = 100;
const pricePerNight = document.querySelector('#price')
const MAX_PRICE = 1000000;

headline.addEventListener('input', () => {
  const valueLength = headline.value.length;

  if (valueLength < MIN_HEADLINE_LENGTH) {
    headline.setCustomValidity('Ещё ' + (MIN_HEADLINE_LENGTH - valueLength) +' символов')
  } else if (valueLength > MAX_HEADLINE_LENGTH) {
    headline.setCustomValidity('Удалите лишние ' + (valueLength - MAX_HEADLINE_LENGTH) + ' символов')
  } else {
    headline.setCustomValidity('');
  }
  headline.reportValidity();
});

pricePerNight.addEventListener('input', () => {
  const valuePrice = pricePerNight.value.length;

  if (valuePrice > MAX_PRICE) {
    pricePerNight.setCustomValidity('');
  }
  pricePerNight.reportValidity();
});
