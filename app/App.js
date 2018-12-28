// @flow
import React from 'react';
const ipcRenderer = require('electron').ipcRenderer;


export default class App extends React.Component<Props> {
  props: Props;

  state = {
    updatesReady: true
  };

  componentDidMount() {
    // wait for an updateReady message
    ipcRenderer.on('updateReady', function(event, text) {
      this.setState({updatesReady: true})
    })
  }

  render() {
    return <React.Fragment>
      {this.state.msg && <div>
        New updates ready
        <button onClick={() => {
          ipcRenderer.send('quitAndInstall')}
        }>Install</button>
      </div>}
      <div>{this.props.children}</div>
    </React.Fragment>;
  }
}
