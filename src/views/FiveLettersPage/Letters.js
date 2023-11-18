import React from 'react';
import PropTypes from 'prop-types';
import {magic, LETTERS} from '@utils';
import {Button} from '@ui';
import s from './style.scss';

const Letters = ({title, color, letters, onClick}) => (
  <div className={s.lettersBlock}>
    <p>{title}</p>
    <div className={s.rows}>
      {
        LETTERS.map((row) => (
          <div className={s.row} key={`${row}`}>
            {
              row.map((letter) => (
                <Button
                  key={letter}
                  icon={letter}
                  color={color}
                  inverse={!letters.includes(letter)}
                  onClick={() => onClick(letter)}
                />
              ))
            }
          </div>
        ))
      }
    </div>
  </div>
);

Letters.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  letters: PropTypes.array,
  onClick: PropTypes.func
};

export default magic(Letters, {styles: s});