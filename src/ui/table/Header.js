import React from 'react';
import PropTypes from 'prop-types';

const Header = ({columns, withSummary}) => (
  <div>
    {'Header'}
  </div>
);

Header.propTypes = {
  columns: PropTypes.array,
  withSummary: PropTypes.bool
};

export default Header;