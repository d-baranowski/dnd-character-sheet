// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Routes from './routes/routes';
import CampFire from "./form/CampFire";

export default class Root extends Component<Props> {
  componentDidMount() {
    window.store = this.props.store;
    document.store = this.props.store;
  }

  render() {
    return (
        <Provider store={this.props.store}>
          <ConnectedRouter history={this.props.history}>
            <Routes />
          </ConnectedRouter>
        </Provider>
    );
  }
}
