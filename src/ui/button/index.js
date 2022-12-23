import React from 'react';
import PropTypes from 'prop-types';
import {Icon} from '@ui';
import ws from 'isomorphic-style-loader/withStyles';
import s from './style.scss';

const Button = (props) => {
  const {
    children,
    icon,
    onClick,
    loading,
    disabled,
    className,
    color,
    inverse,
    full,
    round,
    size,
    ...other
  } = props;

  const getClasses = () => {
    const classes = [];

    if (icon) {
      classes.push(s.icon);
    }

    if (color) {
      classes.push(s[`${color}${inverse ? '-inverse' : ''}`]);
    }

    if (!icon && full) {
      classes.push(s.full);
    }

    if (round) {
      classes.push(s.round);
    }

    if (disabled) {
      classes.push(s.disabled);
    }

    if (loading) {
      classes.push(s.loading);
    }

    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  };

  const onClickHandler = () => {
    if (!disabled && !loading && onClick) {
      return onClick();
    }
  };

  const content = () => {
    if (icon) {
      return icon;
    }

    return children;
  };

  const loader = () => {
    if (loading) {
      return (
        <div className={s.loader}>
          <Icon
            type={'solid'}
            name={'spinner-third'}
            color={'currentColor'}
            spin={true}
          />
        </div>
      );
    }

    return null;
  };

  const disabler = () => {
    if (disabled) {
      return <div className={s.disabler} />;
    }

    return null;
  };

  return (
    <button
      type={'button'}
      className={getClasses()}
      onClick={onClickHandler}
      {...other}
      style={
        {
          minHeight: `${size}px`,
          minWidth: icon ? `${size}px` : '',
          height: `${size}px`,
          width: icon ? `${size}px` : '',
          maxHeight: `${size}px`,
          maxWidth: icon ? `${size}px` : ''
        }
      }
    >
      {
        content()
      }
      {
        loader()
      }
      {
        disabler()
      }
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  size: PropTypes.number,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf([
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
  ]),
  className: PropTypes.string,
  full: PropTypes.bool,
  round: PropTypes.bool,
  inverse: PropTypes.bool
};

Button.defaultProps = {
  color: 'deepblue'
};

export default ws(s)(Button);