import React from 'react';
import PropTypes from 'prop-types';
import AntiMaskInput from './AntiMaskInput';

const AntiMask = ({mask, setMask}) => {
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
        {'Точное отсутствие букв'}
      </div>
      <div style={{display: 'flex', gap: 5}}>
        <AntiMaskInput mask={mask} name={'1'} onChange={handleChange} onFocus={handleFocus} />
        <AntiMaskInput mask={mask} name={'2'} onChange={handleChange} onFocus={handleFocus} />
        <AntiMaskInput mask={mask} name={'3'} onChange={handleChange} onFocus={handleFocus} />
        <AntiMaskInput mask={mask} name={'4'} onChange={handleChange} onFocus={handleFocus} />
        <AntiMaskInput mask={mask} name={'5'} onChange={handleChange} onFocus={handleFocus} />
      </div>
    </div>
  );
};

AntiMask.propTypes = {
  mask: PropTypes.object,
  setMask: PropTypes.func
};

export default AntiMask;