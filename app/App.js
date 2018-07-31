// @flow
import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons/faTimesCircle';

library.add(faStroopwafel, faTimesCircle);

type Props = {
  children: React.Node
};

export default class App extends React.Component<Props> {
  props: Props;

  render() {
    return <div>{this.props.children}</div>;
  }
}
