import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import ColorBox from './ColorBox';
import CheckBox from './CheckBox';
import s from './style.scss';

const colors = [
  'red',
  'volcano',
  'orange',
  'gold',
  'yellow',
  'lime',
  'green',
  'cyan',
  'blue',
  'deepblue',
  'purple',
  'pink'
];

const PropsControl = ({properties, changeProperties, pickColor}) => (
  <div className={s.controlBlock}>
    <div className={s.controls}>
      <CheckBox name={'icon'} checked={properties.icon} onChange={changeProperties} />
      <CheckBox name={'disabled'} checked={properties.disabled} onChange={changeProperties} />
      <CheckBox name={'loading'} checked={properties.loading} onChange={changeProperties} />
      <CheckBox name={'inverse'} checked={properties.inverse} onChange={changeProperties} />
      <CheckBox name={'round'} checked={properties.round} onChange={changeProperties} />
      <CheckBox name={'full'} checked={properties.full} onChange={changeProperties} />

      <div className={s.colors}>
        {
          colors.map((color) => <ColorBox key={color} color={color} onClick={pickColor} />)
        }
      </div>
    </div>
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