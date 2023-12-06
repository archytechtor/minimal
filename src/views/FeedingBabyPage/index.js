import React from 'react';
import {magic} from '@utils';
import Control from './Control';
import Info from './Info';
import s from './style.scss';

const FeedingBabyPage = () => (
  <div className={s.container}>
    <Control />
    <Info />
  </div>
);

export default magic(FeedingBabyPage, {styles: s});