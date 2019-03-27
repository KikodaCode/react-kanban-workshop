/**
 *
 * KanbanCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Container from 'components/Container';
import taskPropTypes from 'propTypes/task';

export const COLOR_TABLE = {
  blue: '#44EBFF',
  yellow: '#FFED44',
  red: '#FF3B3B',
  green: '#68FF44',
};

const KanbanCard = ({ task, color }) => (
  <Container style={{ backgroundColor: COLOR_TABLE[color] }}>
    {task.description}
  </Container>
);

KanbanCard.propTypes = {
  task: taskPropTypes,
  color: PropTypes.string.isRequired,
};

export default KanbanCard;
