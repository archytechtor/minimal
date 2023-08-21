import React from 'react';
import PropTypes from 'prop-types';
import {icons} from './svg';
import ws from 'isomorphic-style-loader/withStyles';
import cn from 'classnames';
import s from './style.scss';

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
    viewBox,
    path
  } = currentIcon;

  const svgPath = () => {
    const [primaryColor, secondaryColor] = Array.isArray(color) ? color : [color, color];

    if (Array.isArray(path)) {
      const [primaryPath, secondaryPath] = path;

      return (
        <React.Fragment>
          <path
            d={primaryPath}
            className={cn({[s[primaryColor]]: primaryColor})}
          />
          <path
            d={secondaryPath}
            className={cn({[s[secondaryColor]]: secondaryColor})}
          />
        </React.Fragment>
      );
    }

    return (
      <path
        d={path}
        className={cn({[s[primaryColor]]: primaryColor})}
      />
    );
  };

  return (
    <span className={cn(s.icon, {[s.spin]: spin}, className)}>
      <svg
        viewBox={viewBox}
        width={size}
        height={size}
        {...other}
      >
        {
          svgPath()
        }
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
  color: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOf([
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
    ),
    PropTypes.oneOf([
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
  ])
};

Icon.defaultProps = {
  size: '18px'
};

export default ws(s)(Icon);

PropTypes.oneOf([
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
]);