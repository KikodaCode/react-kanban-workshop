/*
 *
 * KanbanBoardPage actions
 *
 */

import * as constants from './constants';

export const kanbanBoardLoad = () => ({
  type: constants.KANBAN_BOARD_LOAD,
});

export const kanbanBoardLoadSuccess = board => ({
  type: constants.KANBAN_BOARD_LOAD_SUCCESS,
  board,
});

export const kanbanBoardLoadFail = error => ({
  type: constants.KANBAN_BOARD_LOAD_FAIL,
  error,
});

export const taskUpdate = (taskId, source, destination) => ({
  type: constants.TASK_UPDATE,
  taskId,
  source,
  destination,
});
