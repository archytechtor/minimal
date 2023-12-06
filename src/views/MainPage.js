import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import {Button} from '@ui';
import {Link} from 'react-router-dom';

const MainPage = ({logOut}) => (
  <div style={{display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px'}}>
    <Link to={'/ui'}>
      {'UI Components'}
    </Link>
    <Link to={'/zems_course'}>
      {'Курс "Замер квартиры"'}
    </Link>
    <Link to={'/five_letters'}>
      {'5 букв'}
    </Link>
    <Link to={'/motivation'}>
      {'Мотивация'}
    </Link>
    <Link to={'/feeding_baby'}>
      {'Кормление ребёнка'}
    </Link>
    <Button onClick={logOut}>
      {'Выйти'}
    </Button>
  </div>
);

const mapStore = ({UserStore}) => {
  return {
    logOut: UserStore.logOut
  };
};

MainPage.propTypes = {
  logOut: PropTypes.func
};

export default magic(MainPage, {store: mapStore});