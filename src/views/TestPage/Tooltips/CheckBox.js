import React from 'react';
import PropTypes from 'prop-types';
import ws from 'isomorphic-style-loader/withStyles';
import s from './style.scss';

const CheckBox = ({name, checked, onChange}) => (
  <div className={s.checkbox}>
    <input
      type={'checkbox'}
      name={name}
      value={name}
      checked={checked}
      onChange={onChange}
    />
    <label>{name}</label>
  </div>
);

CheckBox.propTypes = {
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default ws(s)(CheckBox);