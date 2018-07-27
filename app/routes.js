/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from './App';
import HomePage from './home-page/HomePage';

export default () => (
  <App>
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
