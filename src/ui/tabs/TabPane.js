import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import ws from 'isomorphic-style-loader/withStyles';
import s from './style.scss';

const TabPane = ({tabs, activeTab, onClickTab}) => (
  <ul className={s.tabs}>
    {
      tabs.map(({title}, idx) => (
        <Tab
          key={idx}
          title={title}
          isActive={activeTab === idx}
          onClick={() => onClickTab(idx)}
        />
      ))
    }
  </ul>
);

TabPane.propTypes = {
  tabs: PropTypes.array,
  activeTab: PropTypes.number,
  onClickTab: PropTypes.func
};

export default ws(s)(TabPane);