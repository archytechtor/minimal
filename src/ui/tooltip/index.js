import React from 'react';
import PropTypes from 'prop-types';
import {calculatePosition} from '@utils';
import ws from 'isomorphic-style-loader/withStyles';
import cn from 'classnames';
import s from './style.scss';

const Tooltip = (props) => {
  const childRef = React.useRef();
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

  const cloneChildren = React.cloneElement(children, {ref: childRef});

  React.useEffect(() => {
    if (!childRef.current || !tooltipRef.current) {
      return;
    }

    const position = calculatePosition(placement, childRef, tooltipRef);

    tooltipRef.current.style.top = position.top;
    tooltipRef.current.style.left = position.left;
  }, [show]);

  const tooltipClasses = cn(
    s.tooltip,
    {
      [s[`${color}${inverse ? '-inverse' : ''}`]]: color,
      [s['without-arrow']]: !arrow,
      [s[`${placement}`]]: placement
    },
    className
  );

  return (
    <React.Fragment>
      <span
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        {cloneChildren}
      </span>
      {
        show && (
          <div
            ref={tooltipRef}
            className={tooltipClasses}
            {...other}
          >
            <span className={s.content}>
              {content}
            </span>
          </div>
        )
      }
    </React.Fragment>
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