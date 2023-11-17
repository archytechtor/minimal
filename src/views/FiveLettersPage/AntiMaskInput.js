import React from 'react';
import PropTypes from 'prop-types';

const MaskInput = ({mask, name, onChange, onFocus}) => {
  const value = mask[name];

  const background = value && value !== '*' ?
    '#f8646c' :
    '#353639';

  const color = value && value !== '*' ?
    '#1e1f22' :
    '#a9acb7';

  const style = {
    height: '36px',
    width: '72px',
    borderRadius: '5px',
    border: 'none',
    textAlign: 'center',
    fontSize: '18px',
    textTransform: 'uppercase',
    background,
    color
  };

  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      maxLength={4}
      autoComplete={'off'}
      style={style}
    />
  );
};

MaskInput.propTypes = {
  mask: PropTypes.object,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func
};

export default MaskInput;