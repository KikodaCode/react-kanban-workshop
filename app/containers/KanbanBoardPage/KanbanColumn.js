import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Column from 'components/Column';
import ColumnContainer from 'components/ColumnContainer';
import StatusHeader from 'components/StatusHeader';
import StatusHeaderTop from 'components/StatusHeaderTop';
import KanbanCard from 'components/KanbanCard';
import columnPropTypes from 'propTypes/column';
import taskPropTypes from 'propTypes/task';
import * as selectors from './selectors';

export const KanbanColumn = ({ column, tasks }) => (
  <Column>
    <StatusHeaderTop />
    <StatusHeader>{column.name}</StatusHeader>
    <ColumnContainer>
      {tasks.map(task => (
        <KanbanCard color={column.color} key={task.id} task={task} />
      ))}
    </ColumnContainer>
  </Column>
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
