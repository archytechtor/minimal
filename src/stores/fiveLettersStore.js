import {makeAutoObservable} from 'mobx';
import {getMatchWords} from '@utils';

export default class FiveLettersStore {
  mask = {
    '1': '*',
    '2': '*',
    '3': '*',
    '4': '*',
    '5': '*'
  };

  antiMask = {
    '1': '*',
    '2': '*',
    '3': '*',
    '4': '*',
    '5': '*'
  };

  hasLetters = [];

  noLetters = [];

  matchWords = [];

  show = false;

  constructor() {
    makeAutoObservable(this);
  }

  setMask = (mask) => {
    this.mask = mask;
  };

  setAntiMask = (mask) => {
    this.antiMask = mask;
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

  findWords = () => {
    const {mask, antiMask, hasLetters, noLetters} = this;

    const words = getMatchWords({
      mask: Object.values(mask).join(''),
      antiMask: Object.values(antiMask),
      hasLetters,
      noLetters
    });

    this.setMatchWords(words);
    this.setShow(true);
  };
}