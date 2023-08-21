import React from 'react';
import {magic} from '@utils';
import {Icon} from '@ui';
import PropsControl from './PropsControl';
import {icons} from '@ui/icon/svg';
import s from './style.scss';

const Icons = () => {
  const [properties, setProperties] = React.useState({
    type: 'solid',
    name: 'star',
    color: 'gold',
    size: '100',
    spin: false
  });

  const changeProperties = ({target}) => {
    setProperties((prevState) => {
      if (target.name === 'spin') {
        return {
          ...prevState,
          [target.name]: target.checked
        };
      }

      if (target.name === 'type') {
        if (!Object.keys(icons[target.value])[prevState.name]) {
          return {
            ...prevState,
            name: Object.keys(icons[target.value])[0],
            type: target.value
          };
        }
      }

      return {
        ...prevState,
        [target.name]: target.value
      };
    });
  };

  const pickColor = (color) => {
    setProperties((prevState) => {
      return {
        ...prevState,
        color: prevState.type === 'duotone' ?
          [color, Array.isArray(prevState.color) ? prevState.color[0] : prevState.color] :
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