import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import {Button} from '@ui';

/* eslint-disable array-element-newline */
const letters = [
  ['а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з'],
  ['и', 'й', 'к', 'л', 'м', 'н', 'о', 'п'],
  ['р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч'],
  ['ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']
];

const HasLetters = ({addedLetters, addHasLetters, noLetters, addNoLetters}) => {
  const style = {
    display: 'flex',
    gap: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  };

  return (
    <div style={style}>
      <div>
        {'Буквы, которые точно есть в слове'}
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: 5, width: '100%'}}>
        {
          letters.map((row) => (
            <div
              style={{display: 'flex', gap: 5, justifyContent: 'center'}}
              key={`has${row}`}
            >
              {
                row.map((letter) => (
                  <Button
                    key={`has${letter}`}
                    icon={letter}
                    inverse={!addedLetters.includes(letter)}
                    color={'gold'}
                    onClick={() => addHasLetters(letter)}
                  />
                ))
              }
            </div>
          ))
        }
      </div>
      <div style={{marginTop: 20}}>
        {'Буквы, которых точно нет в слове'}
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: 5, width: '100%'}}>
        {
          letters.map((row) => (
            <div
              style={{display: 'flex', gap: 5, justifyContent: 'center'}}
              key={`no${row}`}
            >
              {
                row.map((letter) => (
                  <Button
                    key={`no${letter}`}
                    icon={letter}
                    inverse={!noLetters.includes(letter)}
                    color={'red'}
                    onClick={() => addNoLetters(letter)}
                  />
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  );
};

const mapStore = ({FiveLettersStore}) => {
  return {
    addedLetters: FiveLettersStore.addedLetters,
    addHasLetters: FiveLettersStore.addHasLetters,
    noLetters: FiveLettersStore.noLetters,
    addNoLetters: FiveLettersStore.addNoLetters
  };
};

HasLetters.propTypes = {
  addedLetters: PropTypes.array,
  addHasLetters: PropTypes.func,
  noLetters: PropTypes.array,
  addNoLetters: PropTypes.func
};

export default magic(HasLetters, {store: mapStore});