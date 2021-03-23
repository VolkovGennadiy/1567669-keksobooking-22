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

  let rand = min + Math.random() * (max  - min);
  return rand.toFixed(n);
};

/**
 * Получение случайного элемента объекта
 * @param {object} object — исходный объект
 * @return {string|number|object} — значение объекта со случайным ключом
 */
const getRandomObjectValue = (object) => {
  return getArrayRandomElements(Object.values(object));
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
 * Выбирает случает элемент из массива.
 * @param {Array} array - входной массив
 * @return {*} случайный элемент массива
 */
const getArrayQuantityRandomElements = (array) => {
  return shufleArray(array).slice(0, getRandomIntegerRange(1, array.length));
}

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

const debounce = (cb, delay) => {
  let timeout;
  return () => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(cb, delay)
  };
};

export {
  getRandomIntegerRange,
  getRandomObjectValue,
  getRandomFloatRange,
  getArrayRandomElements,
  getArrayQuantityRandomElements,
  debounce
};
