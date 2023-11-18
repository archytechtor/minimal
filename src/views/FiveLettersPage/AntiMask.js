import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import AntiMaskInput from './AntiMaskInput';
import s from './style.scss';

const AntiMask = ({mask, changeAntiMask, focusAntiMask}) => (
  <div className={s.antiMask}>
    <div className={s.title}>
      <span>{'Буквы, которые есть в слове, но точно'}</span>
      <span>{'находятся не на данных позициях'}</span>
    </div>
    <div className={s.letters}>
      {
        Object.keys(mask).map((key) => (
          <AntiMaskInput
            key={key}
            mask={mask}
            name={key}
            onChange={changeAntiMask}
            onFocus={focusAntiMask}
          />
        ))
      }
    </div>
  </div>
);

const mapStore = ({FiveLettersStore}) => {
  return {
    mask: FiveLettersStore.antiMask,
    changeAntiMask: FiveLettersStore.changeAntiMask,
    focusAntiMask: FiveLettersStore.focusAntiMask
  };
};

AntiMask.propTypes = {
  mask: PropTypes.object,
  changeAntiMask: PropTypes.func,
  focusAntiMask: PropTypes.func
};

export default magic(AntiMask, {store: mapStore, styles: s});