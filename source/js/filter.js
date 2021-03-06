const filterForm = document.querySelector('.map__filters');
const typeFilter = filterForm.querySelector('#housing-type');
const priceFilter = filterForm.querySelector('#housing-price');
const roomsFilter = filterForm.querySelector('#housing-rooms');
const guestsFilter = filterForm.querySelector('#housing-guests');
const featuresFilter = filterForm.querySelector('#housing-features');

const VALUE_DEFAULT = 'any';
const MIN_PRICE = 10000;
const MAX_PRICE = 50000;

const checkType = (data) => {
  return typeFilter.value === data.offer.type || typeFilter.value === VALUE_DEFAULT;
}

const checkPrice = (data) => {
  switch (priceFilter.value) {
    case 'low':
      return data.offer.price < MIN_PRICE;
    case 'middle':
      return data.offer.price >= MIN_PRICE && data.offer.price <= MAX_PRICE;
    case 'high':
      return data.offer.price > MAX_PRICE;
    case 'any':
      return true;
  }
};

const checkRooms = (data) => {
  return Number(roomsFilter.value) === data.offer.rooms || roomsFilter.value === VALUE_DEFAULT;
};

const checkQuests = (data) => {
  return Number(guestsFilter.value) === data.offer.guests || guestsFilter.value === VALUE_DEFAULT;
};

const checkFeatures = (data) => {
  const checkedFeatures = featuresFilter.querySelectorAll('input:checked');
  if (checkedFeatures.length === 0) {
    return true;
  }
  for (let feature of checkedFeatures) {
    if (!data.offer.features.includes(feature.value)) {
      return false;
    }
  }
  return true;
};

const filterData = (arr) => {
  const filters = [];

  for (let i = 0; i< arr.length; i++) {
    const item = arr[i];

    if (checkType(item) && checkPrice(item) && checkRooms(item) && checkQuests(item) && checkFeatures(item)) {
      filters.push(item);
    }

    if (filters.length >= 10) {
      break;
    }
  }

  return filters;
};

export {filterData};
