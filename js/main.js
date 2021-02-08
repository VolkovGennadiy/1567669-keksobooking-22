const getRandomIntegerRange = function (min, max) {
  if (min < 0) {
    min = 0;
  }

  if (max < 0) {
    max = 0
  }

  if (max < min) {
    max = min;
  }

  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const getRandomFloatRange = function (min, max, n) {
  if (min < 0) {
    min = 0;
  }

  if (max < 0) {
    max = 0
  }

  if (max < min) {
    max = min;
  }

  let rand = min + Math.random() * (max + 1 - min);
  return rand.toFixed(n);
};

getRandomIntegerRange(3, 9);
getRandomFloatRange(6, 8, 5);

const avatarQuantity = 8;
const cardsQuantity = 10;

const titles = [
  'Уютная квартира в центре Токио',
  'Бунгало для вечеринок',
  'Уголок рая только для двоих',
  'Место спрятаться от всех',
  'Отличный выбор для путешественников',
];

const coordinates = {
  minX: 35.65000,
  maxX: 35.70000,
  minY: 139.70000,
  maxY: 139.80000,
  figures: 5,
};

const price = {
  min: 0,
  max: 100000,
}

const typeHousings = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const roomsQuantity = {
  min: 1,
  max: 5,
};

const guestsQuantity = {
  min: 1,
  max: 5,
}

const checkinTimes = [
  '12:00',
  '13:00',
  '14:00',
];

const checkoutTimes = [
  '12:00',
  '13:00',
  '14:00',
];

const features = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const description = [
  'Уютная квартира, со всем необходимом для проживания',
  'Рай в шалаше для двоих',
  'Берлога для холостяков на пару вечеров',
  'Удобное расположение для туристов',
  'Отличная инфраструктура, хороший вид из окна',
  'Вся для проживания в центре города',
];

const photos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const coordinatesX = getRandomFloatRange(coordinates.minX, coordinates.maxY, coordinates.figures);
const coordinatesY = getRandomFloatRange(coordinates.minY, coordinates.maxY, coordinates.figures);

const getAheadZeroRandomNumber = (quantity) => {
  const number = getRandomIntegerRange(1, quantity);
  const aheadZero = number < 10 ? '0' : '';
  return aheadZero + number
};

const getArrayRandomElements = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const shufleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i + 1));
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
}

const getArrayQuantityRandomElements = (array) => {
  return shufleArray(array).slice(0, getRandomIntegerRange(1, array.length));
}

const creatureCard = () => {
  const card = {
    author: {
      avatar: 'img/avatars/user' + getAheadZeroRandomNumber(avatarQuantity) + '.png',
    },
    offer: {
      title: getArrayRandomElements(titles),
      adress: coordinatesX + ', ' + coordinatesY,
      price: getRandomIntegerRange(price.min, price.max),
      type: getArrayRandomElements(typeHousings),
      rooms: getRandomIntegerRange(roomsQuantity.min, roomsQuantity.max),
      guests: getRandomIntegerRange(guestsQuantity.min, guestsQuantity.max),
      checkin: getArrayRandomElements(checkinTimes),
      checkout: getArrayRandomElements(checkoutTimes),
      features: getArrayQuantityRandomElements(features),
      description: getArrayRandomElements(description),
      photos: getArrayQuantityRandomElements(photos),
    },
    location: {
      x: coordinatesX,
      y: coordinatesY,
    },
  };
  return card;
};

const creatureCardList = (quantity) => {
  let cardList = [];
  for (let i = 0; i < quantity; i++) {
    cardList.push(creatureCard(quantity));
  }
  return cardList;
}

creatureCardList(cardsQuantity);

