/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import {Switch, Route} from 'react-router';
import App from '../App';
import Navigation from './navigation';
import PageOne from '../home-page/character-sheet/page-one/PageOne';
import Inventory from '../home-page/character-sheet/inventory/Inventory';
import Background from '../home-page/character-sheet/background/Background';
import Spells from '../home-page/character-sheet/spells/Spells';
import spellSlotsPerClass from "../home-page/character-sheet/spells/spellSlotsPerClass";
import CampFire from "../form/CampFire";
import CampfireContainer from "../form/CampfireContainer";

class routes extends React.PureComponent {
  render() {
    return (
      <App>
      <Navigation/>
      <CampfireContainer />
      <Switch>
        <Route exact path="/" component={PageOne}/>
        <Route exact path="/equipment" component={Inventory}/>
        <Route exact path="/background" component={Background}/>
        {Object.keys(spellSlotsPerClass).map((magicUser) => (
          <Route
            key={magicUser}
            exact
            path={`/spells-of-${magicUser}`}
            component={Spells(magicUser)}
          />
        ))}
      </Switch>
    </App>)
  }
}

export default routes;
