/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';
import App from '../App';
import Navigation from './navigation';
import PageOne from '../home-page/character-sheet/page-one/PageOne';
import Inventory from '../home-page/character-sheet/inventory/Inventory';
import Background from '../home-page/character-sheet/background/Background';
import Spells from '../home-page/character-sheet/spells/Spells';

export default () => (
  <App>
    <Navigation />
    <Switch>
      <Route exact path="/" component={PageOne} />
      <Route exact path="/equipment" component={Inventory} />
      <Route exact path="/background" component={Background} />
      <Route exact path="/spells" component={Spells("Wizard")} />
    </Switch>
  </App>
);
