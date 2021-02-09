/**
 * Получение случайного числа из диапазона
 * @param {number} min — минимальное значение
 * @param {number} max — максимальное значение
 * @return {number} — случайное число
 */

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

/**
 * Получение случайного числа из диапазона
 * @param {number} min — минимальное значение
 * @param {number} max — максимальное значение
 * @param {number} n — количество знаков после запятой
 * @return {number} — случайное число
 */

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

const AVATAR_QUANTITY = 8;
const CARDS_QUANTITY = 10;

const TITLES = [
  'Уютная квартира в центре Токио',
  'Бунгало для вечеринок',
  'Уголок рая только для двоих',
  'Место спрятаться от всех',
  'Отличный выбор для путешественников',
];

const COORDINATES = {
  minX: 35.65000,
  maxX: 35.70000,
  minY: 139.70000,
  maxY: 139.80000,
  figures: 5,
};

const PRICE = {
  min: 0,
  max: 100000,
}

const TYPE_HOUSINGS = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const ROOMS_QUANTITY = {
  min: 1,
  max: 5,
};

const QUESTS_QUANTITY = {
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
  const coordinatesX = getRandomFloatRange(COORDINATES.minX, COORDINATES.maxY, COORDINATES.figures);
  const coordinatesY = getRandomFloatRange(COORDINATES.minY, COORDINATES.maxY, COORDINATES.figures);

  const card = {
    author: {
      avatar: 'img/avatars/user' + getAheadZeroRandomNumber(AVATAR_QUANTITY) + '.png',
    },
    offer: {
      title: getArrayRandomElements(TITLES),
      adress: coordinatesX + ', ' + coordinatesY,
      price: getRandomIntegerRange(PRICE.min, PRICE.max),
      type: getArrayRandomElements(TYPE_HOUSINGS),
      rooms: getRandomIntegerRange(ROOMS_QUANTITY.min, ROOMS_QUANTITY.max),
      guests: getRandomIntegerRange(QUESTS_QUANTITY.min, QUESTS_QUANTITY.max),
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

const creatureCardList = (quantity) => {
  let cardList = [];
  for (let i = 0; i < quantity; i++) {
    cardList.push(createCard());
  }
  return cardList;
}

creatureCardList(CARDS_QUANTITY);
