import {makeObservable, observable, action, computed} from 'mobx';
import {getAll, removeById, set} from '@api';
import {getPluralForm, leadingZero, msToTime} from '@utils';

const regexByName = {
  // от 1 до 31 (допускается ведущий 0)
  day: /^(?:[1-9]|0[1-9]|1[0-9]|2[0-9]|3[0,1])$/,
  // от 1 до 12 (допускается ведущий 0)
  month: /^(?:[1-9]|0[1-9]|1[0-2])$/,
  // от 2000 до 2099
  year: /^20\d{2}$/,
  // от 0 до 23 (допускается ведущий 0)
  hour: /^(?:\d|[01]\d|2[0-3])$/,
  // от 0 до 59 (допускается ведущий 0)
  minute: /^(?:\d|0\d|[1-5]\d)$/,
  // от 0 до 59 (допускается ведущий 0)
  second: /^(?:\d|0\d|[1-5]\d)$/
};

class FeedingStore {
  values = {};
  errors = {};
  feedingTime = [];

  constructor() {
    makeObservable(this, {
      values: observable,
      errors: observable,
      feedingTime: observable,

      currentTime: computed,
      hasErrors: computed,
      timestampFromValues: computed,
      lastFeeding: computed,
      feedingTimeWithOffset: computed,

      setValues: action,
      setValue: action,
      setError: action,
      setFeedingTime: action
    });

    this.getRecords();
  }

  // GETTERS AND COMPUTES

  get currentTime() {
    return new Date().toLocaleString();
  }

  get timestampFromValues() {
    if (!Object.values(this.values).filter(Boolean).length) {
      return null;
    }

    const {
      day,
      month,
      year,
      hour,
      minute,
      second
    } = this.values;

    return Date.parse(`${month}-${day}-${year} ${hour}:${minute}:${second}`);
  }

  get lastFeeding() {
    const [lastFeedingTime] = this.feedingTime;

    if (!lastFeedingTime) {
      return '';
    }

    const now = new Date().getTime();
    const {hours, minutes} = msToTime(now - lastFeedingTime.id);

    const lasFeeding = [];

    if (hours) {
      const pluralHours = getPluralForm(hours, ['час', 'часа', 'часов']);

      lasFeeding.push(`${hours} ${pluralHours}`);
    }

    if (minutes) {
      const pluralMinutes = getPluralForm(minutes, ['минуту', 'минуты', 'минут']);

      lasFeeding.push(`${minutes} ${pluralMinutes}`);
    }

    if (!hours && !minutes) {
      lasFeeding.push('несколько секунд')
    }

    return lasFeeding.join(' ');
  }

  get feedingTimeWithOffset() {
    return this.feedingTime.reduce((acc, current, idx) => {
      const prev = acc[idx - 1];

      if (!prev) {
        acc.push({...current, offset: null});
      } else {
        const {hours, minutes} = msToTime(prev.id - current.id);

        acc.push({
          ...current,
          offset: `+ ${leadingZero(hours)} : ${leadingZero(minutes)}`
        });
      }

      return acc;
    }, []);
  }

  get hasErrors() {
    const {errors} = this;

    return !!Object.values(errors).filter(Boolean).length;
  }

  // ACTIONS

  setValues = (values) => {
    this.values = values;
  };

  setValue = (name, value) => {
    const {values} = this;

    this.values = {
      ...values,
      [name]: value
    };
  };

  setError = (name, value) => {
    const {errors} = this;

    this.errors = {
      ...errors,
      [name]: value
    };
  };

  setFeedingTime = (feedingTime) => {
    this.feedingTime = feedingTime.sort((a, b) => b.id - a.id);
  };

  // HANDLERS AND FORMATTING

  setDefault = () => {
    const [date, time] = this.currentTime.split(', ');

    const [day, month, year] = date.split('.');
    const [hour, minute, second] = time.split(':');

    this.setValues({
      day,
      month,
      year,
      hour,
      minute,
      second
    });
  };

  changeValue = (event) => {
    const {name, value} = event.target;

    this.setError(name, false);
    this.checkValue(name, value);
    this.setValue(name, value);
  };

  focusValue = (event) => event.target.select();

  checkValue = (name, value) => {
    const regex = new RegExp(regexByName[name]);

    if (!regex.test(value)) {
      this.setError(name, true);
    }
  };

  refresh = () => {
    this.setDefault();

    return this.getRecords();
  };

  format = (timestamp) => {
    const dateTimeString = new Date(timestamp).toLocaleString();
    const [date, time] = dateTimeString.split(', ');

    return {
      date,
      time
    };
  };

  // REQUESTS

  getRecords = async() => {
    const feedingTime = await getAll('feedingTime');

    this.setFeedingTime(feedingTime);
  };

  saveRecord = async() => {
    const {feedingTime} = this;

    if (this.hasErrors || !this.timestampFromValues) {
      return;
    }

    const id = `${this.timestampFromValues}`;
    const newData = this.format(this.timestampFromValues);

    await set('feedingTime', id, newData);

    this.setFeedingTime([
      ...feedingTime.filter((item) => item.id !== id),
      {
        id,
        ...newData
      }
    ]);
  };

  removeRecord = async(id) => {
    await removeById('feedingTime', id);

    const {feedingTime} = this;

    this.setFeedingTime(feedingTime.filter((item) => item.id !== id));
  };
}

export default FeedingStore;