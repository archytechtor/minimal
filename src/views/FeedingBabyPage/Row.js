import React from 'react';
import PropTypes from 'prop-types';
import {magic, converter} from '@utils';
import s from './style.scss';
import {Icon} from '@ui';

const Row = ({id, date, time, removeRecord}) => (
  <div className={s.row}>
    <p className={s.text}>
      {converter(date)}
    </p>
    <p className={s.text}>
      {converter(time)}
    </p>
    <Icon
      type={'solid'}
      name={'trash'}
      color={'red'}
      onClick={() => removeRecord(id)}
      className={s.remove}
    />
  </div>
);

const mapStore = ({FeedingStore}) => {
  return {
    removeRecord: FeedingStore.removeRecord
  };
};

Row.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,
  removeRecord: PropTypes.func
};

export default magic(Row, {store: mapStore, styles: s});