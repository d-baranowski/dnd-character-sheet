import React, { Component } from 'react';
import sideEffectsMiddleware from '../state/middleware/sideEffectsMiddleware';
import createConnection from './createConnection';
import { Button, Input, Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';

class SynchronizationComponent extends Component {
  loadingCharacterTokens = [];

  state = {
    value: '',
    roomName: '',
    latestEvent: '',
    status: '',
    modalOpen: false
  };

  componentDidMount() {
    sideEffectsMiddleware.registerSideEffect('JOIN_WEB_RTC_ROOM', () => {
      if (!this.state.roomName) {
        this.setState({ modalOpen: true });
      }
    });

    sideEffectsMiddleware.registerSideEffect(
      'OPEN_WEB_RTC_ROOM',
      ({ store, action }) => {
        if (!this.state.roomName) {
          this.setState({ roomName: action.payload.roomName });
          const { promise, events } = createConnection(
            'tbrd6Bv7LyXeG8xX',
            action.payload.roomName
          );
          promise.then(({ publish, subscribe, events, close }) => {
            subscribe('Follow', data => {
              if (data.type === 'LOAD_CHARACTER_TOKEN') {
                this.loadingCharacterTokens[data.index] = data.value;

                if (this.loadingCharacterTokens.length === data.length) {
                  try {
                    const joined = this.loadingCharacterTokens.join('');
                    JSON.parse(joined);
                    store.dispatch({
                      type: 'LOAD_CHARACTER',
                      cameFromRemoteSource: true,
                      payload: joined
                    });
                  } catch (e) {
                    store.dispatch({
                      type: 'FAILED_LOAD_CHARACTER',
                      cameFromRemoteSource: true
                    });
                  }
                }
              } else {
                store.dispatch(data);
              }
            });

            sideEffectsMiddleware.registerSideEffect(
              '*',
              ({ store, action, next }) => {
                if (!action.cameFromRemoteSource) {
                  if (action.type === 'LOAD_CHARACTER') {
                    const tokens = action.payload.match(/.{1,1024}/g);
                    tokens.forEach((token, index, array) => {
                      publish({
                        type: 'LOAD_CHARACTER_TOKEN',
                        value: token,
                        index,
                        length: array.length
                      });
                    });
                  } else {
                    publish({ ...action, cameFromRemoteSource: true });
                  }
                }
              }
            );

            this.close = () => {
              close();
              setTimeout(() => {
                this.setState({ roomName: '' });
                clearInterval(this.updateInterval);
              }, 1500);
            };
          });

          this.updateInterval = setInterval(() => {
            const currentEvents = events();
            this.setState({
              latestEvent: currentEvents[currentEvents.length - 1]
            });
          }, 3000);
        }
      }
    );
  }

  onClose = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            position: 'absolute',
            bottom: 10,
            right: 10,
            zIndex: 1
          }}
        >
          {this.state.roomName && (
            <div>
              <div>
                <strong>Room Name:</strong> {this.state.roomName}
              </div>
              <div>
                <strong>Event:</strong> {this.state.latestEvent}
              </div>
              <button onClick={() => this.close && this.close()}>Close</button>
            </div>
          )}
        </div>
        <Modal open={this.state.modalOpen} onClose={this.onClose}>
          <Modal.Header>Enter room name</Modal.Header>
          <Modal.Content>
            <Input
              value={this.state.value}
              onChange={event => {
                this.setState({ value: event.target.value });
              }}
              placeholder="Room name..."
            />
            <Button
              primary
              onClick={() => {
                this.props.connect(this.state.value);
                this.setState({ modalOpen: false });
              }}
            >
              Connect
            </Button>
          </Modal.Content>
        </Modal>
      </React.Fragment>
    );
  }
}

SynchronizationComponent.propTypes = {};

const mapDispatchToProps = dispatch => ({
  connect: roomName => {
    dispatch({ type: 'OPEN_WEB_RTC_ROOM', payload: { roomName } });
  }
});

export default connect(() => {}, mapDispatchToProps)(SynchronizationComponent);
