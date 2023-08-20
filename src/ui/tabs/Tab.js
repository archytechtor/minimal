import React from 'react';
import PropTypes from 'prop-types';
import ws from 'isomorphic-style-loader/withStyles';
import cn from 'classnames';
import s from './style.scss';

const Tab = ({title, isActive, onClick}) => (
  <li className={cn(s.tab, {[s.active]: isActive})}>
    <a
      className={s.title}
      onClick={onClick}
    >
      {title}
    </a>
  </li>
);

Tab.propTypes = {
  title: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func
};

export default ws(s)(Tab);