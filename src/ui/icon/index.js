import React from 'react';
import PropTypes from 'prop-types';
import {icons} from './svg';
import ws from 'isomorphic-style-loader/withStyles';
import s from './style.scss';
import cn from 'classnames';

const Icon = (props) => {
  const {
    type,
    name,
    size,
    color,
    spin,
    className,
    ...other
  } = props;

  if (!type || !name) {
    // eslint-disable-next-line no-console
    console.log(new Error('Props "type" and "name" is required in Icon component'));

    return null;
  }

  const currentIcon = icons?.[type]?.[name];

  if (!currentIcon) {
    // eslint-disable-next-line no-console
    console.log(new Error(`Icon with type "${type}" and name "${name}" is not found`));

    return null;
  }

  const {
    view_box: viewBox,
    path
  } = currentIcon;

  const classes = cn(
    s.icon,
    {
      [s.spin]: spin,
      [s[color]]: color
    },
    className
  );

  return (
    <span className={classes}>
      <svg
        viewBox={viewBox}
        width={size}
        height={size}
        {...other}
      >
        <path d={path} />
      </svg>
    </span>
  );
};

Icon.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  spin: PropTypes.bool,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  color: PropTypes.oneOf([
    'currentColor',
    'white',
    'black',
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
  ])
};

Icon.defaultProps = {
  size: '18px'
};

export default ws(s)(Icon);