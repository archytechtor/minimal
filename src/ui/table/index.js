import React from 'react';
import PropTypes from 'prop-types';
import ws from 'isomorphic-style-loader/withStyles';
import s from './style.scss';


const Table = ({columns, data, maxHeight, withSummary}) => {
  return (
    <div className={s.table} style={{maxHeight}}>
      <Summary
        columns={columns}
        data={data}
        withSummary={withSummary}
      />
      <Header
        columns={columns}
        withSummary={withSummary}
      />
      <Body
        columns={columns}
        data={data}
      />
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
  maxHeight: PropTypes.number,
  withSummary: PropTypes.bool
};

export default ws(s)(Table);