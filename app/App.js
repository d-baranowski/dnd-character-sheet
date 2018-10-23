// @flow
import React from 'react';

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return <div>{this.props.children}</div>;
  }
}
