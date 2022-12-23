import React from 'react';
import {Tabs} from '@ui';
import Buttons from '@views/TestPage/Buttons';

const TestPage = () => {
  const tabs = [
    {
      title: 'Buttons',
      content: <Buttons />
    },
    {
      title: 'Tab 2',
      content: 'Content of Tab 2'
    },
    {
      title: 'Tab 3',
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