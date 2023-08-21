import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';
import Table from './Table';

const DynamicInfo = ({item}) => {
  switch (item.type) {
    case 'link': {
      return (
        <Link
          text={item.text}
          href={item.link.href}
          label={item.link.label}
        />
      );
    }
    case 'table': {
      return (
        <Table
          text={item.text}
          columns={item.table.columns}
          values={item.table.values}
        />
      );
    }
  }


  return null;
};

DynamicInfo.propTypes = {
  item: PropTypes.object
};

export default DynamicInfo;
