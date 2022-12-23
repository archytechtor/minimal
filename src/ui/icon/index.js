import React from 'react';
import PropTypes from 'prop-types';
import {icons} from './svg';
import ws from 'isomorphic-style-loader/withStyles';
import s from './icon.scss';

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

  const getClasses = () => {
    const classes = [s.icon];

    if (color) {
      classes.push(`${color}`);
    }

    if (spin) {
      classes.push(s.spin);
    }

    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  };

  return (
    <span className={getClasses()}>
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