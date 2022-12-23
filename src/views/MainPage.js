import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import {Button} from '@ui';

const MainPage = ({logOut}) => (
  <div>
    {'MainPage'}

    <Button onClick={logOut}>
      {'Выйти'}
    </Button>
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