import React from 'react';
import {Tabs} from '@ui';
import Icons from './Icons';
import Buttons from './Buttons';
import Tooltips from './Tooltips';

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
      content: <Tooltips />
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