import React from 'react';
import PropTypes from 'prop-types';
import {Button} from '@ui';

/* eslint-disable array-element-newline */
const letters = [
  'а', 'б', 'в', 'г', 'д', 'е',
  'ё', 'ж', 'з', 'и', 'й', 'к',
  'л', 'м', 'н', 'о', 'п', 'р',
  'с', 'т', 'у', 'ф', 'х', 'ц',
  'ч', 'ш', 'щ', 'ъ', 'ы', 'ь',
  'э', 'ю', 'я'
];

const HasLetters = ({hasLetters, setHasLetters, noLetters, setNoLetters}) => {

  const handleClick = (letter, has) => {
    if (has) {
      const isAdded = hasLetters.includes(letter);

      if (isAdded) {
        return setHasLetters(hasLetters.filter((hasLetter) => hasLetter !== letter));
      }

      setHasLetters([...hasLetters, letter]);

      return setNoLetters(noLetters.filter((noLetter) => noLetter !== letter));
    }

    const isAdded = noLetters.includes(letter);

    if (isAdded) {
      return setNoLetters(noLetters.filter((noLetter) => noLetter !== letter));
    }

    setNoLetters([...noLetters, letter]);

    return setHasLetters(hasLetters.filter((hasLetter) => hasLetter !== letter));
  };

  return (
    <div style={{padding: 20, display: 'flex', gap: 20, flexDirection: 'column'}}>
      <div>
        {'Буквы, которые точно есть в слове'}
      </div>
      <div style={{display: 'flex', gap: 5}}>
        {
          letters.map((letter) => (
            <Button
              key={`has${letter}`}
              icon={letter}
              inverse={!hasLetters.includes(letter)}
              color={'gold'}
              onClick={() => handleClick(letter, true)}
            />
          ))
        }
      </div>
      <div>
        {'Буквы, которых точно нет в слове'}
      </div>
      <div style={{display: 'flex', gap: 5}}>
        {
          letters.map((letter) => (
            <Button
              key={`no${letter}`}
              icon={letter}
              inverse={!noLetters.includes(letter)}
              color={'red'}
              onClick={() => handleClick(letter)}
            />
          ))
        }
      </div>
    </div>
  );
};

HasLetters.propTypes = {
  hasLetters: PropTypes.array,
  setHasLetters: PropTypes.func,
  noLetters: PropTypes.array,
  setNoLetters: PropTypes.func
};

export default HasLetters;