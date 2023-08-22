import React from 'react';
import PropTypes from 'prop-types';
import s from '../style.scss';
import {magic} from '@utils';

const List = ({text, items}) => (
  <div className={s.item}>
    <p>{text}</p>
    <ul>
      {
        items.map((item) => (<li>{item}</li>))
      }
    </ul>
  </div>
);

List.propTypes = {
  text: PropTypes.string,
  items: PropTypes.array
};

export default magic(List, {styles: s});