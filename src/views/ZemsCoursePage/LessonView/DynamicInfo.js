import React from 'react';
import PropTypes from 'prop-types';
import Link from './Link';
import Table from './Table';
import List from './List';
import Picture from './VideoSection';
import VideoSection from './VideoSection';

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
    case 'list': {
      return (
        <List
          text={item.text}
          items={item.items}
        />
      );
    }
    case 'picture': {
      return (
        <Picture
          text={item.text}
          src={item.src}
        />
      );
    }
    case 'video': {
      return (
        <React.Fragment>
          <p>{item.text}</p>
          <VideoSection videoId={item.videoId} />
        </React.Fragment>
      );
    }
  }

  return null;
};

DynamicInfo.propTypes = {
  item: PropTypes.object
};

export default DynamicInfo;
