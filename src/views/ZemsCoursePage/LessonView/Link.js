import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import s from '../style.scss';

const Link = ({text, href, label}) => (
  <div className={s.item}>
    <p>{text}</p>
    <a
      className={s.link}
      href={href}
      rel={'noreferrer noopener'}
      target={'_blank'}
    >
      {label}
    </a>
  </div>
);

Link.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  label: PropTypes.string
};

export default magic(Link, {styles: s});