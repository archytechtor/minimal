import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ws from 'isomorphic-style-loader/withStyles';
import s from './style.scss';

const HeaderRow = ({children}) => {
  return (
    <tr className={s.row}>
      {children}
    </tr>
  );
};

HeaderRow.propTypes = {

};

export default ws(s)(HeaderRow);