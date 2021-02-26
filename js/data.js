import {
  getRandomIntegerRange,
  getRandomFloatRange,
  getRandomObjectValue,
  getArrayRandomElements,
  getArrayQuantityRandomElements
} from './util.js';

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
  MIN: 0,
  MAX: 100000,
}

const typeHousings = {
  bungalo: 'Бунгало',
  flat: 'Квартира',
  house: 'Дом',
  palace: 'Дворец',
};

const RoomsQuantity = {
  MIN: 1,
  MAX: 5,
};

const QuestsQuantity = {
  MIN: 1,
  MAX: 5,
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
      price: getRandomIntegerRange(Price.MIN, Price.MAX),
      type: getRandomObjectValue(typeHousings),
      rooms: getRandomIntegerRange(RoomsQuantity.MIN, RoomsQuantity.MAX),
      guests: getRandomIntegerRange(QuestsQuantity.MIN, QuestsQuantity.MAX),
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

export {createCardList, CARDS_QUANTITY, FEATURES};
