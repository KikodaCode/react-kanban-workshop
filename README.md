# react-kanban

> Demo app

## Setup

1. Clone or download this repo.
2. Install Node dependencies via `npm ci`.
3. Make sure the project runs with `npm start`.

## Task

> As a project manager, I need to be able to view and change tasks statuses visually.

**Need:** Create the view and functionality to display tasks on a columnar grid and be able to change their status by dragging them between columns.

**Constraints:**

- A "card" must always have a status
- A "card" may never have more than one status
- "Cards" may not overlap in a column

**Acceptance Criteria:**

- Dragging a card between columns changes the status of the card
- If a user drags a card on top of another card, the card is displayed below that card instead

**Details:**

- Four columns labeled "To Do", "In Progress", "Blocked", "Done"
- Create "cards", which are objects able to be sized, dragged, and have text typed into and edited
- Create a field "Status" for each "card"
- The status of each "card" is set by the column in which it currently resides
- Dragging a "card" between columns will change the status of the "card" to the new column status

## From scratch instructions

1. Clone [`react-boilerplate`](https://github.com/react-boilerplate/react-boilerplate) repo, follow the [_Quick Start_](https://github.com/react-boilerplate/react-boilerplate#quick-start) instructions.
2. Install and configure [`redux-logger`](https://github.com/LogRocket/redux-logger).
3. Create a new KanbanBoardPage container, `react-boilerplate` provides the `npm run generate` script to generate a new container for us.
4. Modify `app/containers/App/index.js` so the `<Route exact path="/" component={KanbanBoardPage} />`.
5. Create reducers, sagas, selectors, and actions.

## Workshop instructions

1. Install [`react-beautiful-dnd`](https://github.com/atlassian/react-beautiful-dnd).
2. Add `DragDropContext` to `KanbanBoardPage`
3. Add `Droppable` to `KanbanColumn`
4. Add `Draggable` to `KanbanCard`, mapping the `index` prop from the task list.
5. Create new action and update reducer.

## Limitations and next steps

- Only one board--this could be solved using routing.
- No tests exist for KanbanBoardPage components, sagas, reducers, or selectors.
- Provide a sort order within a column.
