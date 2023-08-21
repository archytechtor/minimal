import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import {Icon} from '@ui';
import s from '../style.scss';

const ToLearnSection = ({toLearn}) => (
  <div className={s.section}>
    <h2 className={s.title}>
      {'Из этого урока вы узнаете:'}
    </h2>
    <ul className={s.list}>
      {
        toLearn.map((item, idx) => (
          <li className={s.item} key={idx}>
            <Icon
              type={'solid'}
              name={'chevron-right'}
              size={'14'}
              color={'white'}
            />
            <p>{item}</p>
          </li>
        ))
      }
    </ul>
  </div>
);

ToLearnSection.propTypes = {
  toLearn: PropTypes.array
};

export default magic(ToLearnSection, {styles: s});
