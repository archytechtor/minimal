import Ui from './uiStore';
import User from './userStore';
import FiveLetters from './fiveLettersStore';
import Motivation from './motivationStore';
import Feeding from './feedingStore';

const UiStore = new Ui();
const UserStore = new User();
const FiveLettersStore = new FiveLetters();
const MotivationStore = new Motivation();
const FeedingStore = new Feeding();

export {
  UiStore,
  UserStore,
  FiveLettersStore,
  MotivationStore,
  FeedingStore
};