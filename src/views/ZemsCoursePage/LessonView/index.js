import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import lessons from '../lessons';
import TitleSection from './TitleSection';
import ToLearnSection from './ToLearnSection';
import ResultSection from './ResultSection';
import VideoSection from './VideoSection';
import AdditionalInfoSection from './AdditionalInfoSection';
import s from '../style.scss';

const LessonView = ({tab}) => {
  const lesson = lessons[tab];

  if (!lesson) {
    return null;
  }

  return (
    <div className={s.block}>
      <TitleSection
        title={lesson.title}
        description={lesson.description}
      />
      <ToLearnSection toLearn={lesson.toLearn || []} />
      <ResultSection result={lesson.result} />
      <VideoSection fileName={lesson.title} />
      <AdditionalInfoSection additionalInfo={lesson.additionalInfo || []} />
    </div>
  );
};

LessonView.propTypes = {
  tab: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ])
};

export default magic(LessonView, {styles: s});