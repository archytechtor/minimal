import React from 'react';
import {createRoot} from 'react-dom/client';
import StyleContext from 'isomorphic-style-loader/StyleContext';
import {Provider} from 'mobx-react';
import * as stores from '@stores';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

const AppContext = {
  insertCss: (...styles) => {
    const removeCss = styles.map((style) => style._insertCss());

    return () => removeCss.forEach((dispose) => dispose());
  }
};

root.render(
  <StyleContext.Provider value={AppContext}>
    <Provider {...stores}>
      <App />
    </Provider>
  </StyleContext.Provider>
);