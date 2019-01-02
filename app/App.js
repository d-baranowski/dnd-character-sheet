// @flow
import React from 'react';

const ipcRenderer = require('electron').ipcRenderer;

export default class App extends React.Component<Props> {
  props: Props;

  state = {
    updatesReady: false
  };

  componentDidMount() {
    // wait for an updateReady message
    ipcRenderer.on('updateReady', function(event, text) {
      this.setState({ updatesReady: true });
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.updatesReady && (
          <div style={{ zIndex: 1, position: 'absolute' }}>
            New updates ready!
            <button
              onClick={() => {
                ipcRenderer.send('quitAndInstall');
              }}
            >
              Install
            </button>
            <button
              onClick={() => {
                this.setState({ updatesReady: false });
              }}
            >
              Dismiss
            </button>
          </div>
        )}
        <div>{this.props.children}</div>
      </React.Fragment>
    );
  }
}
