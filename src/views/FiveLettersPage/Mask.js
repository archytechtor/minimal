import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import MaskInput from './MaskInput';
import s from './style.scss';

const Mask = ({mask, changeMask, focusMask}) => (
  <div className={s.mask}>
    <p>
      {'Точное положение букв'}
    </p>
    <div className={s.letters}>
      {
        Object.keys(mask).map((key) => (
          <MaskInput
            key={key}
            mask={mask}
            name={key}
            onChange={changeMask}
            onFocus={focusMask}
          />
        ))
      }
    </div>
  </div>
);

const mapStore = ({FiveLettersStore}) => {
  return {
    mask: FiveLettersStore.mask,
    changeMask: FiveLettersStore.changeMask,
    focusMask: FiveLettersStore.focusMask
  };
};

Mask.propTypes = {
  mask: PropTypes.object,
  changeMask: PropTypes.func,
  focusMask: PropTypes.func
};

export default magic(Mask, {store: mapStore, styles: s});