import React from 'react';
import {magic} from '@utils';
import {Tooltip} from '@ui';
import PropsControl from './PropsControl';
import cn from 'classnames';
import s from './style';

const positions = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
  'left-top',
  'left-center',
  'left-bottom',
  'right-top',
  'right-center',
  'right-bottom'
];

const Tooltips = () => {
  const [properties, setProperties] = React.useState({
    inverse: false,
    arrow: true,
    color: null
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
        {
          positions.map((position) => (
            <Tooltip
              key={position}
              {...properties}
              placement={position}
              content={`${position} tooltip`}
            >
              <div className={cn(s.position, s[position])}>
                {position}
              </div>
            </Tooltip>
          ))
        }
      </div>
    </div>
  );
};

export default magic(Tooltips, {styles: s});