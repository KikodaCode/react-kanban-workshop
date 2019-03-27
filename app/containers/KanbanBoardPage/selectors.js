import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the kanbanBoardPage state domain
 */

const selectKanbanBoardPageDomain = state =>
  state.get('kanbanBoardPage', initialState);

/**
 * Other specific selectors
 */

export const columnsSelector = createSelector(
  selectKanbanBoardPageDomain,
  state =>
    state
      .get('columns')
      .valueSeq()
      .map(o => o.toJS())
      .toArray(),
);

export const makeTasksByStatusSelector = () =>
  createSelector(
    selectKanbanBoardPageDomain,
    (_, status) => status,
    (state, status) =>
      state
        .get('tasks')
        .valueSeq()
        .filter(task => task.get('status') === status)
        .map(o => o.toJS())
        .toArray(),
  );

/**
 * Default selector used by KanbanBoardPage
 */

const makeSelectKanbanBoardPage = () =>
  createSelector(selectKanbanBoardPageDomain, substate => substate.toJS());

export default makeSelectKanbanBoardPage;
export { selectKanbanBoardPageDomain };
