import React, { Component } from 'react';
import PropTypes from 'prop-types';
import sideEffectsMiddleware from '../state/middleware/sideEffectsMiddleware';
import { Icon, Label } from 'semantic-ui-react';

class Notification extends Component {
  state = {
    notification: '',
    error: false
  };

  componentDidMount() {
    sideEffectsMiddleware.registerSideEffect('SAVED_CHARACTER', () => {
      this.setState({ notification: 'Saved', error: false });
      setTimeout(() => {
        this.setState({ notification: '', error: false });
      }, 1000);
    });

    sideEffectsMiddleware.registerSideEffect('FAILED_TO_SAVE_CHARACTER', () => {
      this.setState({ notification: 'Failed to save!', error: true });
      setTimeout(() => {
        this.setState({ notification: '', error: false });
      }, 1000);
    });

    sideEffectsMiddleware.registerSideEffect('FAILED_LOAD_CHARACTER', () => {
      this.setState({ notification: 'Failed to load character!', error: true });
      setTimeout(() => {
        this.setState({ notification: '', error: false });
      }, 3000);
    });
  }

  render() {
    if (!this.state.notification) {
      return null;
    }

    return (
      <Label
        style={{
          position: 'absolute',
          zIndex: 1,
          left: '15px'
        }}
        color={this.state.error ? 'red' : undefined}
      >
        <Icon name="spinner" /> {this.state.notification}
      </Label>
    );
  }
}

Notification.propTypes = {};

export default Notification;
