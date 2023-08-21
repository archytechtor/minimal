import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import s from '../style.scss';

const TitleSection = ({title, description}) => (
  <div className={s.section}>
    <h2 className={s.title}>
      {title}
    </h2>
    <p>{description}</p>
  </div>
);

TitleSection.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default magic(TitleSection, {styles: s});