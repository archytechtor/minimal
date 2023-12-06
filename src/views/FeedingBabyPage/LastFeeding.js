import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import s from './style.scss';

const LastFeeding = ({lastFeeding}) => {
  if (!lastFeeding) {
    return null;
  }

  return (
    <div className={s.lastFeeding}>
      <p>
        {'Последнее кормление было:'}
      </p>
      <p>
        <span className={s.time}>
          {lastFeeding}
        </span>
        <span>
          {' назад'}
        </span>
      </p>
    </div>
  );
};

const mapStore = ({FeedingStore}) => {
  return {
    lastFeeding: FeedingStore.lastFeeding
  };
};

LastFeeding.propTypes = {
  lastFeeding: PropTypes.string
};

export default magic(LastFeeding, {store: mapStore, styles: s});