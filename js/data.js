import {getRandomIntegerRange, getRandomFloatRange} from './util.js';

const AVATAR_QUANTITY = 8;
const CARDS_QUANTITY = 10;

const TITLES = [
  'Уютная квартира в центре Токио',
  'Бунгало для вечеринок',
  'Уголок рая только для двоих',
  'Место спрятаться от всех',
  'Отличный выбор для путешественников',
];

const Coordinates = {
  minX: 35.65000,
  maxX: 35.70000,
  minY: 139.70000,
  maxY: 139.80000,
  figures: 5,
};

const Price = {
  min: 0,
  max: 100000,
}

const TYPE_HOUSINGS = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const RoomsQuantity = {
  min: 1,
  max: 5,
};

const QuestsQuantity = {
  min: 1,
  max: 5,
}

const CHECKIN_CHECKOUT_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = [
  'Уютная квартира, со всем необходимом для проживания',
  'Рай в шалаше для двоих',
  'Берлога для холостяков на пару вечеров',
  'Удобное расположение для туристов',
  'Отличная инфраструктура, хороший вид из окна',
  'Вся для проживания в центре города',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const getAheadZeroRandomNumber = (quantity) => {
  const number = getRandomIntegerRange(1, quantity);
  const aheadZero = number < 10 ? '0' : '';
  return aheadZero + number
};

/**
 * Выбирает случайный элемент из массива, возможно повторение
 * @param {Array} array - входной массив
 * @return {*} случайный элемент массива
 */
const getArrayRandomElements = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * Перемешивает элементы массива в случайном порядке
 * @param {array} array — исходный массив
 * @return {array} — итоговый массив
 */
const shufleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i + 1));
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
}

/**
 * Выбирает случает элемент из массива.
 * @param {Array} array - входной массив
 * @return {*} случайный элемент массива
 */
const getArrayQuantityRandomElements = (array) => {
  return shufleArray(array).slice(0, getRandomIntegerRange(1, array.length));
}

/**
 * Генерирует объект объявления из заданных набора данных
 * @return {object} — итоговый объект объявления
 */
const createCard = () => {
  const coordinatesX = getRandomFloatRange(Coordinates.minX, Coordinates.maxY, Coordinates.figures);
  const coordinatesY = getRandomFloatRange(Coordinates.minY, Coordinates.maxY, Coordinates.figures);

  const card = {
    author: {
      avatar: 'img/avatars/user' + getAheadZeroRandomNumber(AVATAR_QUANTITY) + '.png',
    },
    offer: {
      title: getArrayRandomElements(TITLES),
      adress: coordinatesX + ', ' + coordinatesY,
      price: getRandomIntegerRange(Price.min, Price.max),
      type: getArrayRandomElements(TYPE_HOUSINGS),
      rooms: getRandomIntegerRange(RoomsQuantity.min, RoomsQuantity.max),
      guests: getRandomIntegerRange(QuestsQuantity.min, QuestsQuantity.max),
      checkin: getArrayRandomElements(CHECKIN_CHECKOUT_TIMES),
      checkout: getArrayRandomElements(CHECKIN_CHECKOUT_TIMES),
      features: getArrayQuantityRandomElements(FEATURES),
      description: getArrayRandomElements(DESCRIPTION),
      photos: getArrayQuantityRandomElements(PHOTOS),
    },
    location: {
      x: coordinatesX,
      y: coordinatesY,
    },
  };
  return card;
};

const createCardList = (quantity) => {
  let cardList = [];
  for (let i = 0; i < quantity; i++) {
    cardList.push(createCard());
  }
  return cardList;
}

export {createCardList, CARDS_QUANTITY};
