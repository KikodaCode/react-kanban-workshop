export default () => ({
  name: 'Kanban Board',
  columns: [
    {
      name: 'Backlog',
      color: 'blue',
    },
    {
      name: 'In Progress',
      color: 'yellow',
    },
    {
      name: 'Blocked',
      color: 'red',
    },
    {
      name: 'Done',
      color: 'green',
    },
  ],
  tasks: [
    {
      id: 1,
      status: 'In Progress',
      description: 'Make a Kanban board.',
    },
    {
      id: 2,
      status: 'Done',
      description: 'Style Kanban board.',
    },
    {
      id: 3,
      status: 'Backlog',
      description: 'Write tests.',
    },
    {
      id: 4,
      status: 'Backlog',
      description: 'Persist tasks.',
    },
  ],
});
