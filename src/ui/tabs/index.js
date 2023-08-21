import React from 'react';
import PropTypes from 'prop-types';
import TabPane from './TabPane';
import TabContent from './TabContent';
import ws from 'isomorphic-style-loader/withStyles';
import cn from 'classnames';
import s from './style.scss';

const Tabs = ({tabs, orientation}) => {
  const [activeTab, setActiveTab] = React.useState();
  const [content, setContent] = React.useState();

  React.useEffect(() => {
    activateTab(0);
  }, []);

  const activateTab = (idx) => {
    if (idx !== activeTab) {
      setActiveTab(idx);
      setContent(tabs[idx].content);
    }
  };

  return (
    <div className={cn(s.container, s[orientation])}>
      <TabPane
        tabs={tabs}
        activeTab={activeTab}
        onClickTab={activateTab}
      />
      <TabContent content={content} />
    </div>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.array,
  orientation: PropTypes.oneOf([
    'horizontal',
    'vertical'
  ])
};

Tabs.defaultProps = {
  tabs: [],
  orientation: 'horizontal'
};

export default ws(s)(Tabs);