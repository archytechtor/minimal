import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter} from 'react-router-dom';
import {magic} from '@utils';
import Router from './router';
import s from '@styles/main.scss';

const App = ({loading, checkAuth}) => {
  React.useEffect(() => {
    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

const mapStore = ({UserStore}) => ({
  loading: UserStore.loading,
  checkAuth: UserStore.checkAuth
});

App.propTypes = {
  loading: PropTypes.bool,
  checkAuth: PropTypes.func
};

export default magic(App, {store: mapStore, styles: s});