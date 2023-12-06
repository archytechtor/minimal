import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import Row from './Row';
import s from '@views/FeedingBabyPage/style.scss';

const Rows = ({feedingTime}) => {
  if (!feedingTime.length) {
    return 'Здесь пока ещё нет записей';
  }

  return (
    <div className={s.rows}>
      {
        feedingTime.map(({id, date, time}) => (
          <Row
            key={id}
            id={id}
            date={date}
            time={time}
          />
        ))
      }
    </div>
  );
};

const mapStore = ({FeedingStore}) => {
  return {
    feedingTime: FeedingStore.feedingTime
  };
};

Rows.propTypes = {
  feedingTime: PropTypes.array
};

export default magic(Rows, {store: mapStore, styles: s});