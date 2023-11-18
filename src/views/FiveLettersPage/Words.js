import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import s from './style.scss';

const Words = ({error, show, matchWords}) => {
  if (!show && !error) {
    return null;
  }

  if (error) {
    return (
      <div className={s.error}>
        <span>{'Чтобы выполнить поиск'}</span>
        <span>{'необходимо заполнить вводные данные'}</span>
      </div>
    );
  }

  return (
    <React.Fragment>
      <p>
        {`Найдено слов: ${matchWords.length}`}
      </p>
      <div className={s.words}>
        {
          matchWords.map((word) => (
            <h3 key={word}>
              {word.toUpperCase()}
            </h3>
          ))
        }
      </div>
    </React.Fragment>
  );
};

const mapStore = ({FiveLettersStore}) => {
  return {
    error: FiveLettersStore.error,
    show: FiveLettersStore.show,
    matchWords: FiveLettersStore.matchWords
  };
};

Words.propTypes = {
  error: PropTypes.bool,
  show: PropTypes.bool,
  matchWords: PropTypes.arrayOf(PropTypes.string)
};

export default magic(Words, {store: mapStore, styles: s});