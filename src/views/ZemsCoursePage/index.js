import React from 'react';
import {Tabs} from '@ui';
import lessons from './lessons';
import LessonView from './LessonView';

const ZemsCoursePage = () => {
  const tabs = Object.keys(lessons).map((tab) => {
    return {
      title: tab,
      content: <LessonView tab={tab} />
    };
  });

  return (
    <Tabs
      tabs={tabs}
      orientation={'vertical'}
    />
  );
};

export default ZemsCoursePage;