import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';

const MainPage = ({logOut}) => (
  <div>
    {'MainPage'}

    <button
      type={'button'}
      onClick={logOut}
    >
      {'Выйти'}
    </button>
  </div>
);

const mapStore = ({UserStore}) => {
  return {
    logOut: UserStore.logOut
  };
};

MainPage.propTypes = {
  logOut: PropTypes.func
};

export default magic(MainPage, {store: mapStore});