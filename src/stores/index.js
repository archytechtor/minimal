import Ui from './uiStore';
import User from './userStore';
import FiveLetters from './fiveLettersStore';

const UiStore = new Ui();
const UserStore = new User();
const FiveLettersStore = new FiveLetters();

export {
  UiStore,
  UserStore,
  FiveLettersStore
};