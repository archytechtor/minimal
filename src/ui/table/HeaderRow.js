import React from 'react';
import PropTypes from 'prop-types';
import ws from 'isomorphic-style-loader/withStyles';
import s from './style.scss';

const HeaderRow = ({children}) => (
  <tr className={s.row}>
    {children}
  </tr>
);

HeaderRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ])
};

export default ws(s)(HeaderRow);