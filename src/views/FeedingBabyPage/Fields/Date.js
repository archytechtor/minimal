import React from 'react';
import {magic} from '@utils';
import Field from './Field';
import s from '../style.scss';

const Date = () => (
  <div className={s.dateBlock}>
    <Field name={'day'} />
    <p className={s.sign}>{'.'}</p>
    <Field name={'month'} />
    <p className={s.sign}>{'.'}</p>
    <Field name={'year'} />
  </div>
);

export default magic(Date, {styles: s});