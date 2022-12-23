import React from 'react';
import PropTypes from 'prop-types';
import ws from 'isomorphic-style-loader/withStyles';
import s from './tooltip.scss';

const Tooltip = (props) => {
  const childrenRef = React.useRef();
  const tooltipRef = React.useRef();
  const [show, setShow] = React.useState(false);

  const {
    children,
    content,
    className,
    color,
    inverse,
    placement,
    arrow,
    ...other
  } = props;

  React.useEffect(() => {
    if (!childrenRef.current || !tooltipRef.current) {
      return;
    }

    const container = childrenRef.current.getBoundingClientRect();
    const tooltip = tooltipRef.current.getBoundingClientRect();

    switch (placement) {
      case 'top-left':
        tooltipRef.current.style.top = `${-tooltip.height - 10}px`;
        tooltipRef.current.style.left = 0;
        break;
      case 'top-center':
        tooltipRef.current.style.top = `${-tooltip.height - 10}px`;
        tooltipRef.current.style.left = `${container.width / 2 - tooltip.width / 2}px`;
        break;
      case 'top-right':
        tooltipRef.current.style.top = `${-tooltip.height - 10}px`;
        tooltipRef.current.style.left = `${-tooltip.width + container.width}px`;
        break;
      case 'bottom-left':
        tooltipRef.current.style.top = `${container.height + 10}px`;
        tooltipRef.current.style.left = 0;
        break;
      case 'bottom-center':
        tooltipRef.current.style.top = `${container.height + 10}px`;
        tooltipRef.current.style.left = `${container.width / 2 - tooltip.width / 2}px`;
        break;
      case 'bottom-right':
        tooltipRef.current.style.top = `${container.height + 10}px`;
        tooltipRef.current.style.left = `${-tooltip.width + container.width}px`;
        break;
      case 'left-top':
        tooltipRef.current.style.top = 0;
        tooltipRef.current.style.left = `${-tooltip.width - 10}px`;
        break;
      case 'left-center':
        tooltipRef.current.style.top = `${container.height / 2 - tooltip.height / 2}px`;
        tooltipRef.current.style.left = `${-tooltip.width - 10}px`;
        break;
      case 'left-bottom':
        tooltipRef.current.style.top = `${container.height - tooltip.height}px`;
        tooltipRef.current.style.left = `${-tooltip.width - 10}px`;
        break;
      case 'right-top':
        tooltipRef.current.style.top = 0;
        tooltipRef.current.style.left = `${container.width + 10}px`;
        break;
      case 'right-center':
        tooltipRef.current.style.top = `${container.height / 2 - tooltip.height / 2}px`;
        tooltipRef.current.style.left = `${container.width + 10}px`;
        break;
      case 'right-bottom':
        tooltipRef.current.style.top = `${container.height - tooltip.height}px`;
        tooltipRef.current.style.left = `${container.width + 10}px`;
        break;
      default:
        tooltipRef.current.style.top = `${container.width + 10}px`;
        tooltipRef.current.style.left = `${container.height / 2 - tooltip.height / 2}px`;
        break;
    }
  }, [show]);

  const getClasses = () => {
    const classes = [s.tooltip];

    if (color) {
      classes.push(s[`${color}${inverse ? '-inverse' : ''}`]);
    }

    if (!arrow) {
      classes.push(s['without-arrow']);
    }

    if (placement) {
      classes.push(s[`${placement}`]);
    }

    if (className) {
      classes.push(className);
    }

    return classes.join(' ');
  };

  return (
    <div className={s.container}>
      <div
        ref={childrenRef}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </div>
      {
        show && (
          <span
            ref={tooltipRef}
            className={getClasses()}
            {...other}
          >
            <span className={s.content}>
              {content}
            </span>
          </span>
        )
      }
    </div>
  );
};

Tooltip.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  className: PropTypes.string,
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
  placement: PropTypes.oneOf([
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
    'left-top',
    'left-center',
    'left-bottom',
    'right-top',
    'right-center',
    'right-bottom'
  ]),
  arrow: PropTypes.bool,
  inverse: PropTypes.bool
};

Tooltip.defaultProps = {
  placement: 'right-center',
  arrow: true
};

export default ws(s)(Tooltip);