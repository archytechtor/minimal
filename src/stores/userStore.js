import {makeAutoObservable} from 'mobx';
import {onAuthStateChanged, signOut} from 'firebase/auth';
import {signUp, signIn} from '@api';
import {message} from '@ui';
import {auth} from '../firebase';

export default class UserStore {
  email = '';
  password = '';
  showPassword = false;
  isLogin = true;
  user;
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  setEmail = ({target}) => {
    this.email = target.value;
  };

  setPassword = ({target}) => {
    this.password = target.value;
  };

  toggleShowPassword = () => {
    this.showPassword = !this.showPassword;
  };

  setIsLogin = (bool) => {
    this.isLogin = bool;
  };

  setUser = (user) => {
    this.user = user;
  };

  setLoading = (state) => {
    this.loading = state;
  };

  submit = async() => {
    const {
      email,
      password,
      isLogin
    } = this;

    if (!email.trim() || !password.trim()) {
      return message({
        type: 'error',
        message: 'Необходимо ввести email и пароль'
      });
    }

    this.setLoading(true);

    try {
      if (isLogin) {
        const user = await signIn(email, password);

        this.setUser(user);
        this.reset();

        return this.setLoading(false);
      }

      const user = await signUp(email, password);

      this.setUser(user);
      this.reset();
      this.setLoading(false);
    } catch(e) {
      this.setLoading(false);
      this.errorHandler(e);
    }
  };

  checkAuth = async() => {
    onAuthStateChanged(auth, (user) => {
      this.setUser(user);
      this.setLoading(false);
    });
  };

  logOut = () => {
    return signOut(auth);
  };

  reset = () => {
    this.email = '';
    this.password = '';
  };

  errorHandler = (error) => {
    console.log({error});

    if (!error.code) {
      return message({
        type: 'error',
        message: `Во время ${this.isLogin ? 'авторизации' : 'регистрации'} произошла ошибка`
      });
    }

    const errors = {
      'auth/invalid-email': 'Введён некорректный email',
      'auth/wrong-password': 'Введён некорректный пароль',
      'auth/user-not-found': 'Пользователь с таким email не найден. Возможно, пользователь был удален',
      'auth/email-already-in-use': 'Пользователь с таким email уже существует',
      'auth/too-many-requests': 'Доступ к этой учетной записи временно отключён из-за множества неудачных попыток входа',
      'auth/weak-password': 'Пароль должен содержать минимум 6 символов',
      'auth/user-disabled': 'Учётная запись пользователя отключена администратором'
    };

    if (errors[error.code]) {
      return message({
        type: 'error',
        message: errors[error.code]
      });
    }

    return message({
      type: 'error',
      message: `${error.code}: ${error.message}`
    });
  };
}