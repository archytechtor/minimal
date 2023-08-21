import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ws from 'isomorphic-style-loader/withStyles';
import s from './style.scss';

const HeaderCell = ({title, titleColor, width, align}) => {
  const cellClassnames = cn(
    s.cell,
    {
      [s.center]: align === 'center',
      [s.right]: align === 'right'
    }
  );

  const titleClassNames = cn(
    s.title,
    {
      [s[titleColor]]: titleColor
    }
  );

  return (
    <th className={cellClassnames} style={{width}}>
      <h6 className={titleClassNames}>
        {title}
      </h6>
    </th>
  );
};

HeaderCell.propTypes = {
  title: PropTypes.string,
  titleColor: PropTypes.oneOf([
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
  width: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  align: PropTypes.oneOf([
    'left',
    'center',
    'right'
  ])
};

export default ws(s)(HeaderCell);