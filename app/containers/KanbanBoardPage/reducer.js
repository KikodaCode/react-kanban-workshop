/*
 *
 * KanbanBoardPage reducer
 *
 */

import { fromJS, Map } from 'immutable';

import * as constants from './constants';

// Normalized store
export const initialState = fromJS({
  columns: {},
  tasks: {},
});

function kanbanBoardPageReducer(state = initialState, action) {
  switch (action.type) {
    case constants.KANBAN_BOARD_LOAD_SUCCESS:
      return state
        .set(
          'columns',
          action.board.columns.reduce(
            (columns, column) => columns.set(column.name, fromJS(column)),
            new Map(),
          ),
        )
        .set(
          'tasks',
          action.board.tasks.reduce(
            (tasks, task) => tasks.set(task.id, fromJS(task)),
            new Map(),
          ),
        );

    case constants.TASK_UPDATE:
      return state.set(
        'tasks',
        state.get('tasks').set(
          action.taskId,
          state
            .get('tasks')
            .get(action.taskId)
            .set('status', action.destination),
        ),
      );

    default:
      return state;
  }
}

export default kanbanBoardPageReducer;
