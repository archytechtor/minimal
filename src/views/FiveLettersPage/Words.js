import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';

const Words = ({show, matchWords}) => {
  const wordsBlockStyle = {
    display: 'flex',
    gap: 10,
    flexFlow: 'row wrap',
    maxWidth: '400px',
    maxHeight: '400px',
    overflowX: 'hidden',
    overflowY: 'scroll',
    fontFamily: 'monospace',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <React.Fragment>
      {
        show && (
          <div>
            {`Найдено слов: ${matchWords.length}`}
          </div>
        )
      }
      <div
        style={wordsBlockStyle}
        className={'no-scrollbar'}
      >
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

export default magic(Words, {store: mapStore});