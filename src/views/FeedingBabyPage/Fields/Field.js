import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import cn from 'classnames';
import s from '../style.scss';

const lengthByName = {
  day: 2,
  month: 2,
  year: 4,
  hour: 2,
  minute: 2,
  second: 2
};

const Field = ({name, values, errors, onChange, onFocus}) => {
  const value = values[name] ?? '';
  const error = errors[name];

  const className = cn(
    s.input,
    {
      [s.error]: !!error,
      [s.wide]: name === 'year'
    }
  );

  return (
    <input
      name={name}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      minLength={lengthByName[name]}
      maxLength={lengthByName[name]}
      autoComplete={'off'}
      className={className}
    />
  );
};

const mapStore = ({FeedingStore}) => {
  return {
    values: FeedingStore.values,
    errors: FeedingStore.errors,
    onChange: FeedingStore.changeValue,
    onFocus: FeedingStore.focusValue
  };
};

Field.propTypes = {
  name: PropTypes.oneOf([
    'day',
    'month',
    'year',
    'hour',
    'minute',
    'second'
  ]),
  values: PropTypes.object,
  errors: PropTypes.object,
  onChange: PropTypes.func,
  onFocus: PropTypes.func
};

export default magic(Field, {store: mapStore, styles: s});