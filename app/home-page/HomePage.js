// @flow
import React, {Component} from 'react';
import MenuDrawer from './menu-drawer/MenuDrawer';
import PageOne from './character-sheet/page-one/PageOne';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return (
      <React.Fragment>
        <PageOne />
        <MenuDrawer />
      </React.Fragment>
    );
  }
}
