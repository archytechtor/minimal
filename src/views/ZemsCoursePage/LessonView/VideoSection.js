import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import s from '../style.scss';

const VideoSection = ({videoId}) => (
  <iframe
    src={`https://drive.google.com/file/d/${videoId}/preview?start=1`}
    width={1280}
    height={720}
    className={s.iframe}
    allow={'autoplay'}
    allowFullScreen={true}
  ></iframe>
);

VideoSection.propTypes = {
  videoId: PropTypes.string
};

export default magic(VideoSection, {styles: s});