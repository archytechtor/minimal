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
    height: '40px',
    borderRadius: '5px',
    border: 'none',
    textAlign: 'center',
    fontSize: '20px',
    textTransform: 'uppercase',
    maxWidth: '400px',
    background,
    color
  };

  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
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