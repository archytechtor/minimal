import React from 'react';
import PropTypes from 'prop-types';
import {magic} from '@utils';

const Motivation = ({disciplines}) => (
  <div>
    <table>
      <thead>
        <tr style={{display: 'flex', gap: 10}}>
          {
            disciplines.map((discipline) => (
              <td key={discipline.id}>
                {discipline.name}
              </td>
            ))
          }
        </tr>
      </thead>
    </table>
  </div>
);

const mapStore = ({MotivationStore}) => {
  return {
    disciplines: MotivationStore.disciplines,
    marks: MotivationStore.marks
  };
};

Motivation.propTypes = {
  disciplines: PropTypes.array,
  marks: PropTypes.array
};

export default magic(Motivation, {store: mapStore});