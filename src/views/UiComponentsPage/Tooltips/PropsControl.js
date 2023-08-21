import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import ColorBoxes from './ColorBoxes';
import CheckBox from './CheckBox';
import s from './style.scss';

const PropsControl = ({properties, changeProperties, pickColor}) => (
  <div className={s.controlBlock}>
    <div className={s.controls}>
      {
        Object.keys(properties).map((key) => {
          if (key !== 'color') {
            return (
              <CheckBox
                key={key}
                name={key}
                checked={properties[key]}
                onChange={changeProperties}
              />
            );
          }

          return null;
        })
      }
    </div>
    <ColorBoxes onClick={pickColor} />
    <pre>
      {
        JSON.stringify(properties, {}, 2)
      }
    </pre>
  </div>
);

PropsControl.propTypes = {
  properties: PropTypes.object,
  changeProperties: PropTypes.func,
  pickColor: PropTypes.func
};

export default magic(PropsControl, {styles: s});