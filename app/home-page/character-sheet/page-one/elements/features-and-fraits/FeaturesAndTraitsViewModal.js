import React from 'react';
import {Modal} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {closeModal} from './state/featuresAndTraitsActions';

const FeaturesAndTraitsViewModal = ({feat = {}, modalOpen, closeModal}) => (
  <Modal
    open={modalOpen}
    onClose={closeModal}
  >
    <Modal.Header>{feat.name}</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <p style={{whiteSpace: 'pre-line'}}>{Array.isArray(feat.desc) ?
          feat.desc.join('\n\n') : feat.desc
        }</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
);


const mapStateToProps = (state) => ({
  feat: state.homePageReducer.featsAndTraitsReducer.modalFeat,
  modalOpen:  state.homePageReducer.featsAndTraitsReducer.modalOpen
});
const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturesAndTraitsViewModal);
