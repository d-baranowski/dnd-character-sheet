/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from '../App';
import Navigation from './navigation';
import PageOne from '../home-page/character-sheet/page-one/PageOne';

export default () => (
  <App>
    <Navigation />
    <Switch>
      <Route exact path="/" component={PageOne} />
      <Route exact path="/equipment" component={() => "eq"} />
      <Route exact path="/test" component={() => "test"} />
    </Switch>

  </App>
);
