import React from 'react';
import {getMatchWords} from '@utils';
import Mask from '@views/FiveLettersPage/Mask';
import AntiMask from '@views/FiveLettersPage/AntiMask';
import HasLetters from '@views/FiveLettersPage/HasLetters';
import {Button} from '@ui';

const FiveLettersPage = () => {
  const [mask, setMask] = React.useState({
    '1': '*',
    '2': '*',
    '3': '*',
    '4': '*',
    '5': '*'
  });
  const [antiMask, setAntiMask] = React.useState({
    '1': '*',
    '2': '*',
    '3': '*',
    '4': '*',
    '5': '*'
  });
  const [hasLetters, setHasLetters] = React.useState([]);
  const [noLetters, setNoLetters] = React.useState([]);
  const [matchWords, setMatchWords] = React.useState([]);
  const [show, setShow] = React.useState(false);

  const find = () => {
    const words = getMatchWords({
      mask: Object.values(mask).join(''),
      antiMask: Object.values(antiMask),
      hasLetters,
      noLetters
    });

    setMatchWords(words);

    return setShow(true);
  };

  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%', marginTop: 20}}>
      <Mask mask={mask} setMask={setMask} />
      <AntiMask mask={antiMask} setMask={setAntiMask} />
      <HasLetters
        hasLetters={hasLetters}
        setHasLetters={setHasLetters}
        noLetters={noLetters}
        setNoLetters={setNoLetters}
      />
      <div
        style={
          {
            display: 'flex',
            gap: 10,
            flexDirection: 'column',
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center'
          }
        }
      >
        <Button
          onClick={find}
          color={'green'}
        >
          {'Найти'}
        </Button>
        {
          show && (
            <div>
              {`Найдено слов: ${matchWords.length}`}
            </div>
          )
        }
        <div
          style={
            {
              display: 'flex',
              gap: 10,
              flexFlow: 'row wrap',
              maxWidth: '400px',
              maxHeight: '400px',
              overflowX: 'hidden',
              overflowY: 'scroll',
              fontFamily: 'monospace',
              justifyContent: 'center',
              alignItems: 'center'
            }
          }
          className={'no-scrollbar'}
        >
          {
            matchWords.map((word) => (
              <h3 key={word}>
                {word.toUpperCase()}
              </h3>
            ))
          }
        </div>
      </div>
    </div>
  );
};

FiveLettersPage.propTypes = {};

export default FiveLettersPage;