import React from 'react';
import {ROUTES} from '@utils';
import {
  MainPage,
  AuthPage,
  NotFoundPage
} from '@views';

const authRoutes = [
  {
    path: ROUTES.MAIN,
    element: <MainPage />
  }
];

const publicRoutes = [
  {
    path: ROUTES.SIGN_IN,
    element: <AuthPage />
  },
  {
    path: ROUTES.SIGN_UP,
    element: <AuthPage />
  },
  {
    path: ROUTES.NOT_FOUND_404,
    element: <NotFoundPage />
  }
];

export {
  authRoutes,
  publicRoutes
};