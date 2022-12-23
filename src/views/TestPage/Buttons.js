import React from 'react';
import {Button, Icon, Tooltip} from '@ui';
import {magic} from '@utils';
import s from './style.scss';

const colors = [
  'red',
  'volcano',
  'orange',
  'gold',
  'yellow',
  'lime',
  'green',
  'cyan',
  'blue',
  'deepblue',
  'purple',
  'pink'
];

const icons = [
  'chart-simple',
  'heart-rate',
  'wallet',
  'user',
  'star',
  'ruble-sign',
  'sack-dollar',
  'dollar-sign',
  'lock',
  'shovel',
  'power-off',
  'arrow-rotate-right'
];

const renderIcon = (i) => (
  <Icon
    type={'solid'}
    name={icons[i]}
  />
);

const renderButtons = ({icon, ...props}) => {
  if (icon) {
    return (
      <div className={s.container}>
        {
          colors.map((color, i) => (
            <Tooltip
              key={`${color}${i}`}
              color={color}
              inverse={props.inverse}
              content={JSON.stringify({...props, icon, color}, {}, 2)}
              placement={'top-center'}
            >
              <Button
                color={color}
                icon={renderIcon(i)}
                {...props}
              />
            </Tooltip>
          ))
        }
      </div>
    );
  }

  if (props.full) {
    return colors.map((color) => (
      <Button
        key={color}
        color={color}
        {...props}
        style={{marginBottom: '0.5rem'}}
      >
        {color}
      </Button>
    ));
  }

  return (
    <div className={s.container}>
      {
        colors.map((color) => (
          <Tooltip
            key={color}
            color={color}
            inverse={props.inverse}
            content={
              (
                <pre>
                  {JSON.stringify({...props, icon, color}, {}, 2)}
                </pre>
              )
            }
            placement={'top-center'}
          >
            <Button
              color={color}
              {...props}
            >
              {color}
            </Button>
          </Tooltip>
        ))
      }
    </div>
  );
};

const Buttons = () => (
  <div className={s.mainContainer}>
    {'Icon Button & Inverse Icon Button'}
    <div>
      {renderButtons({icon: true})}
      {renderButtons({icon: true, disabled: true})}
      {renderButtons({icon: true, loading: true})}
      {renderButtons({icon: true, disabled: true, loading: true})}
      {renderButtons({inverse: true, icon: true})}
      {renderButtons({inverse: true, icon: true, disabled: true})}
      {renderButtons({inverse: true, icon: true, loading: true})}
      {renderButtons({inverse: true, icon: true, disabled: true, loading: true})}
    </div>
    {'Round Icon Button & Inverse Round Icon Button'}
    <div>
      {renderButtons({icon: true, round: true})}
      {renderButtons({icon: true, round: true, disabled: true})}
      {renderButtons({icon: true, round: true, loading: true})}
      {renderButtons({icon: true, round: true, disabled: true, loading: true})}
      {renderButtons({inverse: true, icon: true, round: true})}
      {renderButtons({inverse: true, icon: true, round: true, disabled: true})}
      {renderButtons({inverse: true, icon: true, round: true, loading: true})}
      {renderButtons({inverse: true, icon: true, round: true, disabled: true, loading: true})}
    </div>
    {'Button & Inverse Button'}
    <div>
      {renderButtons({})}
      {renderButtons({disabled: true})}
      {renderButtons({loading: true})}
      {renderButtons({disabled: true, loading: true})}
      {renderButtons({inverse: true})}
      {renderButtons({inverse: true, disabled: true})}
      {renderButtons({inverse: true, loading: true})}
      {renderButtons({inverse: true, disabled: true, loading: true})}
    </div>
    {'Round Button & Inverse Round Button'}
    <div>
      {renderButtons({round: true})}
      {renderButtons({round: true, disabled: true})}
      {renderButtons({round: true, loading: true})}
      {renderButtons({round: true, disabled: true, loading: true})}
      {renderButtons({inverse: true, round: true})}
      {renderButtons({inverse: true, round: true, disabled: true})}
      {renderButtons({inverse: true, round: true, loading: true})}
      {renderButtons({inverse: true, round: true, disabled: true, loading: true})}
    </div>
  </div>
);

export default magic(Buttons, {styles: s});