import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ws from 'isomorphic-style-loader/withStyles';
import s from './style.scss';

const ColorBox = ({color, onClick}) => (
  <div
    onClick={() => onClick(color)}
    className={cn(s.colorBox, s[color])}
  />
);

ColorBox.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func
};

export default ws(s)(ColorBox);