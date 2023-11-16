import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import {Button} from '@ui';

const FoundButton = ({findWords}) => (
  <Button
    onClick={findWords}
    color={'green'}
  >
    {'Найти'}
  </Button>
);

const mapStore = ({FiveLettersStore}) => {
  return {
    findWords: FiveLettersStore.findWords
  };
};

FoundButton.propTypes = {
  findWords: PropTypes.func
};

export default magic(FoundButton, {store: mapStore});