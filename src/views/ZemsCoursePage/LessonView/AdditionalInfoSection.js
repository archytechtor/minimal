import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import DynamicInfo from './DynamicInfo';
import s from '../style.scss';

const AdditionalInfoSection = ({additionalInfo}) => {
  if (!additionalInfo.length) {
    return null;
  }

  return (
    <div className={s.section}>
      <h2 className={s.title}>
        {'Дополнительная информация:'}
      </h2>
      <ul className={s.list}>
        {
          additionalInfo.map((item) => (
            <li key={item.text}>
              <DynamicInfo item={item} />
            </li>
          ))
        }
      </ul>
    </div>
  );
};

AdditionalInfoSection.propTypes = {
  additionalInfo: PropTypes.array
};

export default magic(AdditionalInfoSection, {styles: s});
