import React from 'react';
import {magic} from '@utils';
import {Icon} from '@ui';
import PropsControl from './PropsControl';
import s from './style.scss';

const Icons = () => {
  const [properties, setProperties] = React.useState({
    type: 'solid',
    name: 'star',
    color: 'red',
    size: '18',
    spin: false
  });

  const changeProperties = ({target}) => {
    setProperties((props) => {
      if (target.name === 'spin') {
        return {
          ...props,
          [target.name]: target.checked
        };
      }

      return {
        ...props,
        [target.name]: target.value
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
        <Icon {...properties} />
      </div>
    </div>
  );
};

export default magic(Icons, {styles: s});