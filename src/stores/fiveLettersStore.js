import {makeAutoObservable} from 'mobx';
import {getMatchWords} from '@utils';

const DEFAULT_MASK = {
  '1': '*',
  '2': '*',
  '3': '*',
  '4': '*',
  '5': '*'
};

export default class FiveLettersStore {
  mask = DEFAULT_MASK;
  antiMask = DEFAULT_MASK;
  hasLetters = [];
  noLetters = [];
  matchWords = [];
  show = false;

  constructor() {
    makeAutoObservable(this);
  }

  setMask = (mask, withoutCheck) => {
    this.mask = mask;

    if (!withoutCheck) {
      this.checkMasks(mask, 'mask');
    }
  };

  setAntiMask = (mask, withoutCheck) => {
    this.antiMask = Object.fromEntries(
      Object.entries(mask).map(([key, value]) => {
        if (value) {
          return [key, [...new Set(value)].join('')];
        }

        return [key, value];
      })
    );

    if (!withoutCheck) {
      this.checkMasks(mask, 'antiMask');
    }
  };

  setHasLetters = (letters) => {
    this.hasLetters = letters;
  };

  setNoLetters = (letters) => {
    this.noLetters = letters;
  };

  setMatchWords = (words) => {
    this.matchWords = words;
  };

  setShow = (state) => {
    this.show = state;
  };

  clear = () => {
    this.setMask(DEFAULT_MASK);
    this.setAntiMask(DEFAULT_MASK);
    this.setHasLetters([]);
    this.setNoLetters([]);
    this.setMatchWords([]);
    this.setShow(false);
  };

  findWords = () => {
    const {mask, antiMask, hasLetters, noLetters} = this;

    const words = getMatchWords({
      mask: Object.values(this.prepareMask(mask)).join(''),
      antiMask: Object.values(this.prepareMask(antiMask)),
      hasLetters,
      noLetters
    });

    this.setMatchWords(words);
    this.setShow(true);
  };

  prepareMask = (mask) =>
    Object.fromEntries(
      Object.entries(mask).map(([key, value]) => {
        if (!value) {
          return [key, '*'];
        }

        return [key, value];
      })
    );

  addHasLetters = (letter) => {
    const {hasLetters, noLetters} = this;

    if (hasLetters.includes(letter)) {
      return this.setHasLetters(
        hasLetters.filter((hasLetter) => hasLetter !== letter)
      );
    }

    this.setHasLetters([...hasLetters, letter]);

    return this.setNoLetters(
      noLetters.filter((noLetter) => noLetter !== letter)
    );
  };

  addNoLetters = (letter) => {
    const {hasLetters, noLetters} = this;

    if (noLetters.includes(letter)) {
      return this.setNoLetters(
        noLetters.filter((noLetter) => noLetter !== letter)
      );
    }

    this.setNoLetters([...noLetters, letter]);

    return this.setHasLetters(
      hasLetters.filter((hasLetter) => hasLetter !== letter)
    );
  };

  checkMasks = (addedMask, type) => {
    const {mask, antiMask} = this;

    if (type === 'antiMask') {
      const newMask = {...mask};

      Object.entries(addedMask).forEach(([key, value]) => {
        const letter = newMask[key];

        if (letter !== '*' && value.includes(letter)) {
          newMask[key] = '*';
        }
      });

      return this.setMask(newMask, true);
    }

    const newMask = {...antiMask};

    Object.entries(addedMask).forEach(([key, value]) => {
      const letters = newMask[key];

      if (letters !== '*') {
        newMask[key] = letters.replace(value, '');
      }
    });

    return this.setAntiMask(newMask, true);
  };
}