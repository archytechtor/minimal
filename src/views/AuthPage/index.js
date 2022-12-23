import React from 'react';
import PropTypes from 'prop-types';
import {Link as RouterLink, Navigate} from 'react-router-dom';
import {magic, ROUTES} from '@utils';
import s from './style.scss';

const AuthPage = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    isLogin,
    user,
    setIsLogin,
    loading,
    submit
  } = props;

  if (user) {
    return <Navigate to={ROUTES.MAIN} />;
  }

  return (
    <div className={s.page}>
      <input
        value={email}
        onChange={setEmail}
        type={'email'}
        placeholder={'Email'}
      />
      <input
        value={password}
        onChange={setPassword}
        type={showPassword ? 'text' : 'password'}
        placeholder={'Пароль'}
      />
      <button
        type={'button'}
        onClick={submit}
        disabled={loading}
      >
        {isLogin ? 'Войти' : 'Создать'}
      </button>
      {
        isLogin ? (
          <RouterLink
            to={ROUTES.SIGN_UP}
            onClick={() => setIsLogin(false)}
          >
            {'Нет аккаунта? '}
            {'Регистрация'}
          </RouterLink>
        ) : (
          <RouterLink
            to={ROUTES.SIGN_IN}
            onClick={() => setIsLogin(true)}
          >
            {'Есть аккаунт? '}
            {'Авторизация'}
          </RouterLink>
        )
      }
    </div>
  );
};

const mapStore = ({UserStore}) => {
  return {
    email: UserStore.email,
    setEmail: UserStore.setEmail,
    password: UserStore.password,
    setPassword: UserStore.setPassword,
    showPassword: UserStore.showPassword,
    isLogin: UserStore.isLogin,
    user: UserStore.user,
    setIsLogin: UserStore.setIsLogin,
    loading: UserStore.loading,
    submit: UserStore.submit
  };
};

AuthPage.propTypes = {
  email: PropTypes.string,
  setEmail: PropTypes.func,
  password: PropTypes.string,
  setPassword: PropTypes.func,
  showPassword: PropTypes.bool,
  isLogin: PropTypes.bool,
  user: PropTypes.object,
  setIsLogin: PropTypes.func,
  loading: PropTypes.bool,
  submit: PropTypes.func
};

export default magic(AuthPage, {store: mapStore, styles: s});