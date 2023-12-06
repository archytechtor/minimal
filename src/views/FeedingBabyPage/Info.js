import React from 'react';
import {magic} from '@utils';
import Rows from './Rows';
import LastFeeding from './LastFeeding';
import s from './style.scss';

const Info = () => (
  <div className={s.info}>
    <LastFeeding />
    <Rows />
  </div>
);

export default magic(Info, {styles: s});