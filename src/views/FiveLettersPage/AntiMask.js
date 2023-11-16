import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import AntiMaskInput from './AntiMaskInput';

const AntiMask = ({mask, setMask}) => {
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
    alignItems: 'center',
    marginTop: 20
  };

  return (
    <div style={style}>
      <div>
        {'Точное отсутствие букв'}
      </div>
      <div style={{display: 'flex', gap: 5, flexDirection: 'column'}}>
        {
          Object.keys(mask).map((key) => (
            <AntiMaskInput
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
    mask: FiveLettersStore.antiMask,
    setMask: FiveLettersStore.setAntiMask
  };
};

AntiMask.propTypes = {
  mask: PropTypes.object,
  setMask: PropTypes.func
};

export default magic(AntiMask, {store: mapStore});