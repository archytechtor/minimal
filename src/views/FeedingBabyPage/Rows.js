import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import Row from './Row';
import s from '@views/FeedingBabyPage/style.scss';

const Rows = ({feedingTimeWithOffset}) => {
  if (!feedingTimeWithOffset.length) {
    return 'Здесь пока ещё нет записей';
  }

  return (
    <div className={s.rows}>
      {
        feedingTimeWithOffset.map(({id, date, time, offset}) => (
          <Row
            key={id}
            id={id}
            date={date}
            time={time}
            offset={offset}
          />
        ))
      }
    </div>
  );
};

const mapStore = ({FeedingStore}) => {
  return {
    feedingTimeWithOffset: FeedingStore.feedingTimeWithOffset
  };
};

Rows.propTypes = {
  feedingTimeWithOffset: PropTypes.array
};

export default magic(Rows, {store: mapStore, styles: s});