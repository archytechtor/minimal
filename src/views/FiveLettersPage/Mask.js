import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import MaskInput from './MaskInput';

const Mask = ({mask, setMask}) => {
  const handleChange = (event) => {
    setMask({
      ...mask,
      [event.target.name]: event.target.value
    });
  };

  const handleFocus = (event) => {
    const value = mask[event.target.name];

    if (value === '*') {
      return event.target.select();
    }
  };

  const style = {
    display: 'flex',
    gap: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div style={style}>
      <div>
        {'Точное положение букв'}
      </div>
      <div style={{display: 'flex', gap: 5}}>
        {
          Object.keys(mask).map((key) => (
            <MaskInput
              key={key}
              mask={mask}
              name={key}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          ))
        }
      </div>
    </div>
  );
};

const mapStore = ({FiveLettersStore}) => {
  return {
    mask: FiveLettersStore.mask,
    setMask: FiveLettersStore.setMask
  };
};

Mask.propTypes = {
  mask: PropTypes.object,
  setMask: PropTypes.func
};

export default magic(Mask, {store: mapStore});