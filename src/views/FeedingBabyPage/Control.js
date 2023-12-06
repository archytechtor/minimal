import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import s from './style.scss';
import Date from './Fields/Date';
import Time from './Fields/Time';
import {Button, Icon} from '@ui';

const Control = ({setDefault, saveRecord, refresh}) => {
  React.useEffect(() => {
    setDefault();
  }, []);

  return (
    <div className={s.control}>
      <Date />
      <Time />
      <Button
        color={'deepblue'}
        onClick={refresh}
        icon={<Icon type={'solid'} name={'arrow-rotate-right'} />}
      >
        {'Сохранить'}
      </Button>
      <Button
        color={'green'}
        onClick={saveRecord}
        icon={<Icon type={'solid'} name={'plus'} />}
      >
        {'Сохранить'}
      </Button>
    </div>
  );
};

const mapStore = ({FeedingStore}) => {
  return {
    setDefault: FeedingStore.setDefault,
    saveRecord: FeedingStore.saveRecord,
    refresh: FeedingStore.refresh
  };
};

Control.propTypes = {
  setDefault: PropTypes.func,
  saveRecord: PropTypes.func,
  refresh: PropTypes.func
};

export default magic(Control, {store: mapStore, styles: s});