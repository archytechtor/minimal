import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import {Icon} from '@ui';
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
            <li className={s.item} key={item.text}>
              <Icon
                type={'solid'}
                name={'chevron-right'}
                size={'14'}
                color={'white'}
              />
              <p>{item.text}</p>
              {
                item.type === 'link' && (
                  <a
                    className={s.link}
                    href={item.link.href}
                    rel={'noreferrer noopener'}
                    target={'_blank'}
                  >
                    {item.link.label}
                  </a>
                )
              }
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
