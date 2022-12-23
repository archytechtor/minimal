import ws from 'isomorphic-style-loader/withStyles';
import {inject, observer} from 'mobx-react';

export const magic = (component, ext) => {
  const {styles, store} = ext || {};

  if (!store && !styles) {
    return observer(component);
  }

  if (!styles) {
    return inject(store)(observer(component));
  }

  const _styles = Array.isArray(styles) ? styles : [styles];

  if (!store) {
    return ws(..._styles)(observer(component));
  }

  return ws(..._styles)(inject(store)(observer(component)));
};