import React from 'react';
import PropTypes from 'prop-types';
import MaskInput from './MaskInput';

const Mask = ({mask, setMask}) => {
  const handleChange = (event) => {
    setMask({
      ...mask,
      [event.target.name]: event.target.value || '*'
    });
  };

  const handleFocus = (event) => event.target.select();

  return (
    <div style={{padding: 20, display: 'flex', gap: 5, flexDirection: 'column'}}>
      <div>
        {'Точное положение букв'}
      </div>
      <div style={{display: 'flex', gap: 5}}>
        <MaskInput mask={mask} name={'1'} onChange={handleChange} onFocus={handleFocus} />
        <MaskInput mask={mask} name={'2'} onChange={handleChange} onFocus={handleFocus} />
        <MaskInput mask={mask} name={'3'} onChange={handleChange} onFocus={handleFocus} />
        <MaskInput mask={mask} name={'4'} onChange={handleChange} onFocus={handleFocus} />
        <MaskInput mask={mask} name={'5'} onChange={handleChange} onFocus={handleFocus} />
      </div>
    </div>
  );
};

Mask.propTypes = {
  mask: PropTypes.object,
  setMask: PropTypes.func
};

export default Mask;