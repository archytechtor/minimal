import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import s from '../style.scss';

const ResultSection = ({result}) => (
  <div className={s.section}>
    <h2 className={s.title}>
      {'Результат:'}
    </h2>
    <p>{result}</p>
  </div>
);

ResultSection.propTypes = {
  result: PropTypes.string
};

export default magic(ResultSection, {styles: s});
