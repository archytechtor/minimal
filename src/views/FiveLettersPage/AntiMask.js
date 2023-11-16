import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import AntiMaskInput from './AntiMaskInput';

const AntiMask = ({mask, setMask}) => {
  const handleChange = (event) => {
    setMask({
      ...mask,
      [event.target.name]: event.target.value || '*'
    });
  };

  const handleFocus = (event) => event.target.select();

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
        <AntiMaskInput mask={mask} name={'1'} onChange={handleChange} onFocus={handleFocus} />
        <AntiMaskInput mask={mask} name={'2'} onChange={handleChange} onFocus={handleFocus} />
        <AntiMaskInput mask={mask} name={'3'} onChange={handleChange} onFocus={handleFocus} />
        <AntiMaskInput mask={mask} name={'4'} onChange={handleChange} onFocus={handleFocus} />
        <AntiMaskInput mask={mask} name={'5'} onChange={handleChange} onFocus={handleFocus} />
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