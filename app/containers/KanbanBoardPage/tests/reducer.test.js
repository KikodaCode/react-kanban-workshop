import { fromJS } from 'immutable';
import kanbanBoardPageReducer from '../reducer';

describe('kanbanBoardPageReducer', () => {
  xit('returns the initial state', () => {
    expect(kanbanBoardPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
