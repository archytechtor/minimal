import LETTERS_MATCHING from './consts/lettersMatching.json';

export const keyboardConvert = (string) => {
  const letters = string.toLowerCase().split('');
  const russianKeys = Object.values(LETTERS_MATCHING);

  const isNeedToConvert = letters.some((letter) => !russianKeys.includes(letter));

  if (!isNeedToConvert) {
    return string;
  }

  return letters.map((letter) => {
    if (russianKeys.includes(letter)) {
      return letter;
    }

    const correctLetter = LETTERS_MATCHING[letter];

    if (correctLetter) {
      return correctLetter;
    }

    return '';
  }).join('');
};