import React from 'react';
import {Tabs} from '@ui';
import Icons from './Icons';
import Buttons from './Buttons';

const TestPage = () => {
  const tabs = [
    {
      title: 'Icon',
      content: <Icons />
    },
    {
      title: 'Button',
      content: <Buttons />
    },
    {
      title: 'Tooltip',
      content: 'Content of Tab 3'
    }
  ];

  return (
    <Tabs
      tabs={tabs}
      orientation={'vertical'}
    />
  );
};

export default TestPage;