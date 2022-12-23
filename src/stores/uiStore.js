import {makeAutoObservable} from 'mobx';

class UiStore {
  mode = localStorage.getItem('mode') || 'dark';
  currentPage = window.location.pathname;

  constructor() {
    makeAutoObservable(this);
  }

  setMode = (mode) => {
    this.mode = mode;

    this.saveMode(mode);
  };

  toggleMode = () => {
    const {mode} = this;

    if (mode === 'dark') {
      return this.setMode('light');
    }

    this.setMode('dark');
  };

  saveMode = (mode) => {
    if (mode !== localStorage.getItem('mode')) {
      localStorage.removeItem('mode');
      localStorage.setItem('mode', mode);
    }
  };

  setCurrentPage = (location) => {
    this.currentPage = location;
  };
}

export default UiStore;