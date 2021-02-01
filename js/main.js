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
