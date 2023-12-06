import {magic} from './magic';
import {calculatePosition} from './calculatePosition';
import ROUTES from './consts/routes.json';
import {getMatchWords} from './getMatchWords';
import LETTERS from './consts/letters.json';
import {keyboardConvert} from './keyboardConvert';
import {getPluralForm} from './getPluralForm';

const hasValue = (value) => value !== '' && value !== null && value !== undefined;

const leadingZero = (number) => number < 10 ? `0${number}` : `${number}`;

const msToTime = (duration) => {
  return {
    seconds: Math.floor(duration / 1000 % 60),
    minutes: Math.floor(duration / (1000 * 60) % 60),
    hours: Math.floor(duration / (1000 * 60 * 60) % 24)
  };
};

export {
  magic,
  calculatePosition,
  ROUTES,
  getMatchWords,
  LETTERS,
  keyboardConvert,
  hasValue,
  msToTime,
  leadingZero,
  getPluralForm
};