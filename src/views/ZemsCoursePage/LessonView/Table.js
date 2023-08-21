import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';
import Link from './Link';
import cn from 'classnames';
import s from '../style.scss';

const Table = ({text, columns, values}) => {
  return (
    <React.Fragment>
      <p>{text}</p>
      <table className={s.table}>
        <tr className={s.header}>
          {
            columns.map((column) => (
              <th
                key={column.name}
                className={s.headerCell}
              >
                {column.title}
              </th>
            ))
          }
        </tr>
        {
          values.map((val) => (
            <tr
              key={val.name}
              className={s.row}
            >
              {
                Object.keys(val).map((key) => {
                  switch (key) {
                    case 'icon': {
                      return (
                        <td
                          key={key}
                          className={s.rowCell}
                        >
                          {
                            val[key] ? <img src={val[key]} alt={val.name} /> : ''
                          }
                        </td>
                      );
                    }
                    case 'model': {
                      return (
                        <td
                          key={key}
                          className={s.rowCell}
                        >
                          <Link href={val[key]} label={'Ссылка'} />
                        </td>
                      );
                    }
                  }

                  return (
                    <td
                      key={key}
                      className={s.rowCell}
                    >
                      {val[key]}
                    </td>
                  );
                })
              }
            </tr>
          ))
        }
      </table>
    </React.Fragment>
  );
};

Table.propTypes = {
  columns: PropTypes.array,
  values: PropTypes.array
};

export default magic(Table, {styles: s});
