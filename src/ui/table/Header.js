import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import ws from 'isomorphic-style-loader/withStyles';
import s from './style.scss';

const Header = ({columns, withSummary}) => {
  return (
    <div>
      {'Header'}
    </div>
  );
};

Header.propTypes = {
  columns: PropTypes.array,
  withSummary: PropTypes.bool
};

export default Header;