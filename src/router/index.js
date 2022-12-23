import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {magic, ROUTES} from '@utils';
import {authRoutes, publicRoutes} from './routes';

const route = ({path, element, exact = false}) => (
  <Route
    key={path}
    path={path}
    element={element}
    exact={`${exact}`}
  />
);

const Router = ({user}) => (
  <Routes>
    {
      user && authRoutes.map(route)
    }
    {
      publicRoutes.map(route)
    }
    <Route
      path={'*'}
      element={
        <Navigate to={user ? ROUTES.NOT_FOUND_404 : ROUTES.SIGN_IN} />
      }
    />
  </Routes>
);

const mapStore = ({UserStore}) => ({
  user: UserStore.user
});

export default magic(Router, {store: mapStore});