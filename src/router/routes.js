import React from 'react';
import {ROUTES} from '@utils';
import {
  MainPage,
  AuthPage,
  NotFoundPage,
  UiComponentsPage,
  ZemsCoursePage,
  FiveLettersPage,
  MotivationPage,
  FeedingBabyPage
} from '@views';

const authRoutes = [
  {
    path: ROUTES.MAIN,
    element: <MainPage />
  },
  {
    path: ROUTES.UI,
    element: <UiComponentsPage />
  },
  {
    path: ROUTES.ZEMS_COURSE,
    element: <ZemsCoursePage />
  },
  {
    path: ROUTES.MOTIVATION,
    element: <MotivationPage />
  },
  {
    path: ROUTES.FEEDING_BABY,
    element: <FeedingBabyPage />
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
    path: ROUTES.FIVE_LETTERS,
    element: <FiveLettersPage />
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