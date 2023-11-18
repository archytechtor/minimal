import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import cn from 'classnames';
import s from './style.scss';

const MaskInput = ({mask, name, onChange, onFocus}) => {
  const value = mask[name];
  const className = cn(s.input, {[s.fullFilled]: value && value !== '*'});

  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      maxLength={1}
      autoComplete={'off'}
      className={className}
    />
  );
};

MaskInput.propTypes = {
  mask: PropTypes.object,
  name: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func
};

export default magic(MaskInput, {styles: s});