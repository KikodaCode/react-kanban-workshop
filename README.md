# react-kanban

> Demo app

## From scratch instructions

1. Clone [`react-boilerplate`](https://github.com/react-boilerplate/react-boilerplate) repo, follow the [_Quick Start_](https://github.com/react-boilerplate/react-boilerplate#quick-start) instructions.
2. Install and configure [`redux-logger`](https://github.com/LogRocket/redux-logger).
3. Create a new KanbanBoardPage container, `react-boilerplate` provides the `npm run generate` script to generate a new container for us.
4. Modify `app/containers/App/index.js` so the `<Route exact path="/" component={KanbanBoardPage} />`.
5. Create reducers, sagas, selectors, and actions.

## Workshop instructions

1. Install [`react-beatiful-dnd`](https://github.com/atlassian/react-beautiful-dnd).
2. Add `DragDropContext` to `KanbanBoardPage`
3. Add `Droppable` to `KanbanColumn`
4. Add `Draggable` to `KanbanCard`, mapping the `index` prop from the task list.
5. Create new action and update reducer.

## Limitations and next steps

- Only one board--this could be solved using routing.
- No tests exist for KanbanBoardPage components, sagas, reducers, or selectors.
- Provide a sort order within a column.
