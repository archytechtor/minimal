import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import s from './style.scss';
import {Button, Icon} from '@ui';

const Row = ({id, date, time, removeRecord}) => (
  <div className={s.row}>
    <p>
      {date}
    </p>
    <p>
      {time}
    </p>
    <Button
      color={'red'}
      onClick={() => removeRecord(id)}
      icon={<Icon type={'solid'} name={'trash'} />}
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