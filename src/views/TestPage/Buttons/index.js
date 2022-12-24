import React from 'react';
import {Button, Icon} from '@ui';
import {magic} from '@utils';
import s from './style.scss';
import PropsControl from '@views/TestPage/Buttons/PropsControl';

const Buttons = () => {
  const [properties, setProperties] = React.useState({
    icon: false,
    inverse: false,
    round: false,
    full: false,
    color: 'red'
  });

  const changeProperties = ({target}) => {
    setProperties((props) => {
      return {
        ...props,
        [target.name]: target.checked
      };
    });
  };

  const pickColor = (color) => {
    setProperties((props) => {
      return {
        ...props,
        color
      };
    });
  };

  return (
    <div className={s.container}>
      <PropsControl
        properties={properties}
        changeProperties={changeProperties}
        pickColor={pickColor}
      />
      <div className={s.demoBlock}>
        {'Default Button'}
        <Button
          {...properties}
          icon={
            properties.icon ? (
              <Icon
                type={'solid'}
                name={'star'}
              />
            ) : null
          }
        >
          {'Button'}
        </Button>
        {'Loading Button'}
        <Button
          {...properties}
          loading={true}
          icon={
            properties.icon ? (
              <Icon
                type={'solid'}
                name={'star'}
              />
            ) : null
          }
        >
          {'Button'}
        </Button>
        {'Disabled Button'}
        <Button
          {...properties}
          disabled={true}
          icon={
            properties.icon ? (
              <Icon
                type={'solid'}
                name={'star'}
              />
            ) : null
          }
        >
          {'Button'}
        </Button>
      </div>
    </div>
  );
};

export default magic(Buttons, {styles: s});