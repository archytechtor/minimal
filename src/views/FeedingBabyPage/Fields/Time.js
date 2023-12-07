import React from 'react';
import {magic} from '@utils';
import Field from './Field';
import s from '../style.scss';

const Time = () => (
  <div className={s.timeBlock}>
    <Field name={'hour'} />
    <p className={s.sign}>{':'}</p>
    <Field name={'minute'} />
    {/*Скрыл секунды за ненадобностью*/}
    {/*<p className={s.sign}>{':'}</p>*/}
    {/*<Field name={'second'} />*/}
  </div>
);

export default magic(Time, {styles: s});