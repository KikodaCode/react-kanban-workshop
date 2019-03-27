/**
 *
 * KanbanCard
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';

import Container from 'components/Container';
import taskPropTypes from 'propTypes/task';

export const COLOR_TABLE = {
  blue: '#44EBFF',
  yellow: '#FFED44',
  red: '#FF3B3B',
  green: '#68FF44',
};

const KanbanCard = ({ task, color, index }) => (
  <Draggable draggableId={task.id} index={index}>
    {provided => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <Container style={{ backgroundColor: COLOR_TABLE[color] }}>
          {task.description}
        </Container>
      </div>
    )}
  </Draggable>
);

KanbanCard.propTypes = {
  task: taskPropTypes,
  color: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default KanbanCard;
