import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import s from './style.scss';

const Words = ({show, matchWords}) => {
  if (!show) {
    return null;
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
    show: FiveLettersStore.show,
    matchWords: FiveLettersStore.matchWords
  };
};

Words.propTypes = {
  show: PropTypes.bool,
  matchWords: PropTypes.arrayOf(PropTypes.string)
};

export default magic(Words, {store: mapStore, styles: s});