import { all, takeEvery, call, put } from 'redux-saga/effects';

import kanbanBoardService from 'service/kanbanBoard';
import * as actions from './actions';
import * as constants from './constants';

// Individual exports for testing
export default function* kanbanBoardPageSaga() {
  yield all([takeEvery(constants.KANBAN_BOARD_LOAD, kanbanBoardLoad)]);
}

export function* kanbanBoardLoad() {
  try {
    const board = yield call(kanbanBoardService);
    yield put(actions.kanbanBoardLoadSuccess(board));
  } catch (e) {
    yield put(actions.kanbanBoardLoadFail(e));
  }
}
