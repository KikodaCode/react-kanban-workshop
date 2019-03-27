/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NotFoundPage from 'containers/NotFoundPage';
import KanbanBoardPage from 'containers/KanbanBoardPage';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={KanbanBoardPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </React.Fragment>
  );
}
