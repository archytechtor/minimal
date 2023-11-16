import WORDS from './consts/words.json';

const getByMask = (word, mask) => {
  const regex = new RegExp(mask.replace(/\*/g, '.'));

  return regex.test(word);
};

const getByAntiMask = (word, antiMask) => {
  const regex = new RegExp(
    antiMask
      .map((letters) => letters === '*' ? '.' : `[^${letters.split('').join()}]`)
      .join('')
  );

  return regex.test(word);
};

const getByHasLetters = (word, hasLetters) => {
  const letters = word.split('');

  return hasLetters.length ?
    hasLetters.every((letter) => letters.includes(letter)) :
    true;
};

const getByNoLetters = (word, noLetters) => {
  const letters = word.split('');

  return noLetters.length ?
    noLetters.every((letter) => !letters.includes(letter)) :
    true;
};

const intersections = (...arrays) => {
  arrays.sort((a, b) => a.length - b.length);

  const arraysDicts = [];

  for (let arrayIndex = 1; arrayIndex < arrays.length; arrayIndex++) {
    const dict = {};

    for (let index = 0; index < arrays[arrayIndex].length; index++) {
      dict[arrays[arrayIndex][index]] = true;
    }

    arraysDicts.push(dict);
  }

  const res = [];

  for (let index = 0; index < arrays[0].length; index++) {
    let flag = true;

    for (let arrayIndex = 0; arrayIndex < arraysDicts.length; arrayIndex++) {
      if (!(arrays[0][index] in arraysDicts[arrayIndex])) {
        flag = false;

        break;
      }
    }

    if (flag) {
      res.push(arrays[0][index]);
    }
  }

  return res;
};

export const getMatchWords = ({mask, antiMask, hasLetters, noLetters}) => {
  const filteredByMaskWords = mask ?
    WORDS.filter((word) => getByMask(word, mask)) :
    WORDS;

  const filteredByAntiMaskWords = antiMask ?
    WORDS.filter((word) => getByAntiMask(word, antiMask)) :
    WORDS;

  const filteredByHasLetters = WORDS.filter((word) => getByHasLetters(word, hasLetters));
  const filteredByNoLetters = WORDS.filter((word) => getByNoLetters(word, noLetters));

  return intersections(
    filteredByMaskWords,
    filteredByAntiMaskWords,
    filteredByHasLetters,
    filteredByNoLetters
  );
};