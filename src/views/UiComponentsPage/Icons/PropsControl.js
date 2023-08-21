import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import s from './style.scss';
import CheckBox from './CheckBox';
import ColorBoxes from './ColorBoxes';
import {icons} from '@ui/icon/svg';

const types = [
  'brands',
  'duotone',
  'light',
  'regular',
  'solid'
];

const PropsControl = ({properties, changeProperties, pickColor}) => (
  <div className={s.controlBlock}>
    <div className={s.controls}>
      {
        Object.keys(properties).map((key) => {
          if (key === 'spin') {
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
      <label aria-label={'type'}>
        {'type'}
      </label>
      <select
        name={'type'}
        onChange={changeProperties}
        value={properties.type}
      >
        {
          types.map((option) => <option key={option} value={option}>{option}</option>)
        }
      </select>
      <label aria-label={'name'}>
        {'name'}
      </label>
      <select
        name={'name'}
        onChange={changeProperties}
        value={properties.name}
      >
        {
          Object.keys(icons[properties.type])
            .map((option) => <option key={option} value={option}>{option}</option>)
        }
      </select>
      <label aria-label={'size'}>
        {'size'}
      </label>
      <input
        name={'size'}
        value={properties.size}
        onChange={changeProperties}
        type={'number'}
        min={1}
        max={200}
      />
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