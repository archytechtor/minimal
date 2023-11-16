import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import {Button} from '@ui';

const Buttons = ({findWords, clear}) => (
  <div style={{display: 'flex', gap: 40, justifyContent: 'center', alignItems: 'center'}}>
    <Button
      onClick={findWords}
      color={'green'}
    >
      {'Найти'}
    </Button>
    <Button
      onClick={clear}
      color={'red'}
    >
      {'Очистить'}
    </Button>
  </div>
);

const mapStore = ({FiveLettersStore}) => {
  return {
    findWords: FiveLettersStore.findWords,
    clear: FiveLettersStore.clear
  };
};

Buttons.propTypes = {
  findWords: PropTypes.func,
  clear: PropTypes.func
};

export default magic(Buttons, {store: mapStore});