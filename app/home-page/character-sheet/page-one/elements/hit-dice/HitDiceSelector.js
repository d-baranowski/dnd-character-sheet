import React from 'react';
import { Modal } from 'semantic-ui-react';
import { connect } from 'react-redux';
import SceneComponent from './3d/componentns/SceneComponent';
import { setModalVisibility } from './state/hitDiceActions';

class HitDiceSelector extends React.PureComponent {
  handleClose = () => this.props.setModalVisibility(false);

  render() {
    return (
      <Modal
        open={this.props.modalVisible}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Modal.Content style={{ minWidth: 700 }}>
          <SceneComponent width={700} height={700} />
        </Modal.Content>
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  modalVisible: state.homePageReducer.hitDiceReducer.modalVisible
});

const mapDispatchToProps = dispatch => ({
  setModalVisibility: visibility => dispatch(setModalVisibility(visibility))
});

export default connect(mapStateToProps, mapDispatchToProps)(HitDiceSelector);
