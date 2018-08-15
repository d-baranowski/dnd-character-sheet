import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';
import { history } from './state/store/configureStore';
import store from "./state/store/store";
import './app.global.scss';

const globalStore = store;

render(
  <AppContainer>
    <Root store={globalStore} history={history} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NextRoot = require('./Root'); // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextRoot store={globalStore} history={history} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
