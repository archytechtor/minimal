import React from 'react';
import PropTypes from 'prop-types';

const VideoSection = ({fileName}) => (
  <video
    width={'1024'}
    height={'576'}
    controls={true}
  >
    <source
      src={`/videos/${fileName}.mp4`}
      type={'video/mp4'}
    />
  </video>
);

VideoSection.propTypes = {
  fileName: PropTypes.string
};

export default VideoSection;