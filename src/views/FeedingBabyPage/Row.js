import React from 'react';
import PropTypes from 'prop-types';
import {magic, converter} from '@utils';
import {Icon} from '@ui';
import s from './style.scss';

const Row = ({id, date, time, offset, removeRecord}) => (
  <div className={s.row}>
    <div className={s.time}>
      <p className={s.text}>
        {converter(date).replace(/(.*)\.(.*)\.(.{4})(.*)/, '$1.$2.$4')}
      </p>
      <p className={s.text}>
        {converter(time).replace(/(.*):(.*):(.*)/, '$1:$2')}
      </p>
    </div>
    <div className={s.offset}>
      {offset}
    </div>
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
  offset: PropTypes.string,
  removeRecord: PropTypes.func
};

export default magic(Row, {store: mapStore, styles: s});