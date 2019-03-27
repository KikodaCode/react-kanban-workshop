import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Droppable } from 'react-beautiful-dnd';

import Column from 'components/Column';
import ColumnContainer from 'components/ColumnContainer';
import StatusHeader from 'components/StatusHeader';
import StatusHeaderTop from 'components/StatusHeaderTop';
import KanbanCard from 'components/KanbanCard';
import columnPropTypes from 'propTypes/column';
import taskPropTypes from 'propTypes/task';
import * as selectors from './selectors';

export const KanbanColumn = ({ column, tasks }) => (
  <Droppable droppableId={column.name}>
    {provided => (
      <Column>
        <StatusHeaderTop />
        <StatusHeader>{column.name}</StatusHeader>
        <ColumnContainer ref={provided.innerRef} {...provided.droppableProps}>
          {tasks.map((task, index) => (
            <KanbanCard
              color={column.color}
              key={task.id}
              task={task}
              index={index}
            />
          ))}
          {provided.placeholder}
        </ColumnContainer>
      </Column>
    )}
  </Droppable>
);

KanbanColumn.propTypes = {
  column: columnPropTypes,
  tasks: PropTypes.arrayOf(taskPropTypes).isRequired,
};

const makeMapStateToProps = () => {
  const tasksByStatusSelector = selectors.makeTasksByStatusSelector();
  return (state, props) => ({
    tasks: tasksByStatusSelector(state, props.column.name),
  });
};

export default connect(makeMapStateToProps)(KanbanColumn);
