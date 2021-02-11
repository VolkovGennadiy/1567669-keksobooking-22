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

export {getRandomIntegerRange, getRandomFloatRange};
