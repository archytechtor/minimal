import React from 'react';
import PropTypes from 'prop-types';
import ws from 'isomorphic-style-loader/withStyles';
import s from './style.scss';

const TabContent = ({content}) => (
  <div className={s.content}>
    {content}
  </div>
);

TabContent.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ])
};

export default ws(s)(TabContent);