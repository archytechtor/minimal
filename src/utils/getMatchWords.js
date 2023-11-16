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

const getByKnownLetters = (word, hasLetters, noLetters) => {
  const letters = word.split('');

  const itsOkWord = noLetters ?
    noLetters.every((letter) => !letters.includes(letter)) :
    true;

  if (!itsOkWord) {
    return false;
  }

  return hasLetters.length ?
    hasLetters.every((letter) => letters.includes(letter)) :
    true;
};

export const getMatchWords = ({mask, antiMask, hasLetters, noLetters}) => {
  const filteredByMaskWords = mask ?
    WORDS.filter((word) => getByMask(word, mask)) :
    WORDS;

  const filteredByAntiMaskWords = antiMask ?
    filteredByMaskWords.filter((word) => getByAntiMask(word, antiMask)) :
    filteredByMaskWords;

  return filteredByAntiMaskWords.filter((word) => getByKnownLetters(word, hasLetters, noLetters));
};