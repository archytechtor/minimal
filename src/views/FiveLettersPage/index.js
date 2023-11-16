import React from 'react';
import Mask from './Mask';
import AntiMask from './AntiMask';
import HasLetters from './HasLetters';
import Words from './Words';
import Buttons from './Buttons';

const FiveLettersPage = () => {
  // TODO: когда будет не лень отрефакторить эту вьюху
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    marginTop: 20
  };

  const foundBlockStyle = {
    display: 'flex',
    gap: 10,
    flexDirection: 'column',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div style={containerStyle}>
      <Mask />
      <AntiMask />
      <HasLetters />
      <div style={foundBlockStyle}>
        <Buttons />
        <Words />
      </div>
    </div>
  );
};

export default FiveLettersPage;