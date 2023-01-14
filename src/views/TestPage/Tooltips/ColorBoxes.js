import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ws from 'isomorphic-style-loader/withStyles';
import s from './style.scss';

const colors = [
  'default',
  'red',
  'volcano',
  'orange',
  'gold',
  'yellow',
  'lime',
  'green',
  'cyan',
  'blue',
  'deepblue',
  'purple',
  'pink'
];

const ColorBoxes = ({onClick}) => (
  <div className={s.colors}>
    {
      colors.map((color) => (
        <div
          key={color}
          onClick={() => onClick(color === 'default' ? null : color)}
          className={cn(s.colorBox, s[color])}
        />
      ))
    }
  </div>
);

ColorBoxes.propTypes = {
  onClick: PropTypes.func
};

export default ws(s)(ColorBoxes);