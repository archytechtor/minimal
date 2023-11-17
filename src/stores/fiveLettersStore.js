import {makeObservable, observable, action, computed, reaction} from 'mobx';
import {getMatchWords} from '@utils';

const DEFAULT_MASK = {
  '1': '*',
  '2': '*',
  '3': '*',
  '4': '*',
  '5': '*'
};

class FiveLettersStore {
  mask = DEFAULT_MASK;
  antiMask = DEFAULT_MASK;
  hasLetters = [];
  noLetters = [];
  matchWords = [];
  show = false;

  disposers = [];

  constructor() {
    makeObservable(this, {
      addedLetters: computed,

      mask: observable,
      antiMask: observable,
      hasLetters: observable,
      noLetters: observable,
      matchWords: observable,
      show: observable,

      setMask: action,
      setAntiMask: action,
      setHasLetters: action,
      setNoLetters: action,
      setMatchWords: action,
      setShow: action
    });

    this.disposers.push(
      reaction(
        () => [this.mask, this.antiMask, this.hasLetters],
        () => this.removeFromNoLetters()
      ),
      reaction(
        () => [this.noLetters],
        () => this.removeFromMasksAndHasLetters()
      )
    );
  }

  // COMPUTES AND GETTERS

  get addedLetters() {
    const addedLetters = [
      ...new Set([
        ...Object.values(this.mask),
        ...Object.values(this.antiMask).flatMap((letters) => letters.split('')),
        ...this.hasLetters
      ])
    ];

    return addedLetters.filter((letter) => letter && letter !== '*');
  }

  // ACTIONS

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

  // HANDLERS

  clear = () => {
    this.setMask(DEFAULT_MASK, true);
    this.setAntiMask(DEFAULT_MASK, true);
    this.setHasLetters([]);
    this.setNoLetters([]);
    this.setMatchWords([]);
    this.setShow(false);
  };

  findWords = () => {
    const {mask, antiMask, noLetters} = this;

    const words = getMatchWords({
      mask: Object.values(this.prepareMask(mask)).join(''),
      antiMask: Object.values(this.prepareMask(antiMask)),
      hasLetters: this.addedLetters,
      noLetters
    });

    this.setMatchWords(words);
    this.setShow(true);
  };

  addHasLetters = (letter) => {
    const {hasLetters} = this;

    if (hasLetters.includes(letter)) {
      return this.setHasLetters(hasLetters.filter((hasLetter) => hasLetter !== letter));
    }

    return this.setHasLetters([...hasLetters, letter]);
  };

  addNoLetters = (letter) => {
    const {noLetters} = this;

    if (noLetters.includes(letter)) {
      return this.setNoLetters(noLetters.filter((noLetter) => noLetter !== letter));
    }

    return this.setNoLetters([...noLetters, letter]);
  };

  checkMasks = (addedMask, type) => {
    const {mask, antiMask} = this;

    if (type === 'antiMask') {
      const newMask = {...mask};

      Object.entries(addedMask).forEach(([position, letters]) => {
        const letter = newMask[position];

        if (letter !== '*' && letters.includes(letter)) {
          newMask[position] = '*';
        }
      });

      return this.setMask(newMask, true);
    }

    const newMask = {...antiMask};

    Object.entries(addedMask).forEach(([position, letter]) => {
      const letters = newMask[position];

      if (letters !== '*') {
        const newLetters = letters.replace(letter, '');

        newMask[position] = newLetters || '*';
      }
    });

    return this.setAntiMask(newMask, true);
  };

  // FORMATTERS

  prepareMask = (mask) =>
    Object.fromEntries(
      Object.entries(mask).map(([key, value]) => {
        if (!value) {
          return [key, '*'];
        }

        return [key, value];
      })
    );

  // DISPOSERS

  removeFromNoLetters = () => {
    const {noLetters} = this;

    if (this.addedLetters.some((letter) => noLetters.includes(letter))) {
      this.setNoLetters(noLetters.filter((noLetter) => !this.addedLetters.includes(noLetter)));
    }
  };

  removeFromMasksAndHasLetters = () => {
    const {noLetters, mask, antiMask, hasLetters} = this;

    if (this.addedLetters.some((letter) => noLetters.includes(letter))) {
      this.setHasLetters(hasLetters.filter((letter) => !noLetters.includes(letter)));

      this.setMask(
        Object.fromEntries(
          Object.entries(mask).map(([position, letter]) => {
            if (noLetters.includes(letter)) {
              return [position, '*'];
            }

            return [position, letter];
          })
        ),
        true
      );

      this.setAntiMask(
        Object.fromEntries(
          Object.entries(antiMask).map(([position, letters]) => {
            if ([...letters].some((letter) => noLetters.includes(letter))) {
              const regex = new RegExp(noLetters.join('|'), 'gi');

              return [position, letters.replace(regex, '')];
            }

            return [position, letters];
          })
        ),
        true
      );
    }
  };

  closeStore = () => {
    this.disposers.forEach((disposer) => disposer());
  };
}

export default FiveLettersStore;