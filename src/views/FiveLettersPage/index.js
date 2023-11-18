import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import Mask from './Mask';
import AntiMask from './AntiMask';
import Letters from './Letters';
import Words from './Words';
import Buttons from './Buttons';
import s from './style.scss';

const FiveLettersPage = ({closeStore, addedLetters, addHasLetters, noLetters, addNoLetters}) => {
  React.useEffect(() => () => closeStore(), []);

  return (
    <div className={s.container}>
      <Mask />
      <AntiMask />
      <Letters
        title={'Буквы, которые точно есть в слове'}
        color={'gold'}
        letters={addedLetters}
        onClick={addHasLetters}
      />
      <Letters
        title={'Буквы, которых точно нет в слове'}
        color={'red'}
        letters={noLetters}
        onClick={addNoLetters}
      />
      <Buttons />
      <Words />
    </div>
  );
};

const mapStore = ({FiveLettersStore}) => {
  return {
    closeStore: FiveLettersStore.closeStore,
    addedLetters: FiveLettersStore.addedLetters,
    addHasLetters: FiveLettersStore.addHasLetters,
    noLetters: FiveLettersStore.noLetters,
    addNoLetters: FiveLettersStore.addNoLetters
  };
};

FiveLettersPage.propTypes = {
  closeStore: PropTypes.func,
  addedLetters: PropTypes.array,
  addHasLetters: PropTypes.func,
  noLetters: PropTypes.array,
  addNoLetters: PropTypes.func
};

export default magic(FiveLettersPage, {store: mapStore, styles: s});