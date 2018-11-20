import React from 'react';
import {Input, Modal, TextArea} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {closeModal, deleteChosenFeat, editChosenFeat} from './state/featuresAndTraitsActions';

const ViewMode = ({feat}) => (
  <React.Fragment>
    <Modal.Header>{feat.name}</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <p style={{whiteSpace: 'pre-line'}}>{Array.isArray(feat.desc) ?
          feat.desc.join('\n\n') : feat.desc
        }</p>
      </Modal.Description>
    </Modal.Content>
  </React.Fragment>
);

class EditMode extends React.PureComponent {
  state = {
    featName: this.props.feat.name,
    featDesc: Array.isArray(this.props.feat.desc) ? this.props.feat.desc.join('\n\n') : this.props.feat.desc
  };

  handleDescUpdate(featDesc) {
    const {handleChange, feat} = this.props;

    this.setState({
      featDesc
    });

    handleChange({id: feat.id, desc: featDesc, name: this.state.featName})
  }

  handleNameUpdate(featName) {
    const {handleChange, feat} = this.props;

    this.setState({
      featName
    });

    handleChange({id: feat.id, desc: this.state.featDesc, name: featName});
  }

  render() {
    return (
      <React.Fragment>
        <Modal.Header>
          <Input
            autoFocus
            placeholder='Feat Name'
            value={this.state.featName}
            onChange={(event) => this.handleNameUpdate(event.target.value)}
          />
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
        <TextArea
          autoHeight
          style={{width: "100%"}}
          autoFocus
          placeholder='Description'
          value={this.state.featDesc}
          onChange={(event) => this.handleDescUpdate(event.target.value)}
        />
          </Modal.Description>
        </Modal.Content>
      </React.Fragment>
    );
  }
}

class FeaturesAndTraitsModal extends React.PureComponent {
  state = {
    edit: false
  };

  deleteFeat = (feat) =>
  {
    this.props.deleteFeat(feat);
    this.props.closeModal();
  };

  enterEditMode = () => {
    if (this.props.feat.id) {
      this.setState({
        edit: true
      });
    }
  };

  onClose = () => {
    this.setState({
      edit: false
    });
    this.props.closeModal();
  };

  render() {
    const {feat = {}, modalOpen} = this.props;
    const {edit} = this.state;
    const canEdit = !!feat.id;
    return (
      <Modal
        open={modalOpen}
        onClose={this.onClose}
      >
        {canEdit && <svg
          onClick={this.enterEditMode}
          width="1.28571429em"
          height="1.28571429em"
          style={{
            position: "absolute",
            top: 21,
            right: 21
          }}
        >
          <use xlinkHref="#icon-edit" />
        </svg>}
        {canEdit && <svg
          onClick={() => {this.deleteFeat(feat)}}
          width="1.28571429em"
          height="1.28571429em"
          style={{
            position: "absolute",
            top: 21,
            right: 46
          }}
        >
          <use xlinkHref="#icon-delete" />
        </svg>}
        {!edit && <ViewMode feat={feat} /> || <EditMode handleChange={this.props.onChange} feat={feat} />}
      </Modal>
    )
  }
}

const mapStateToProps = (state) => ({
  feat: state.homePageReducer.featsAndTraitsReducer.modalFeat,
  modalOpen:  state.homePageReducer.featsAndTraitsReducer.modalOpen
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  onChange: (feat) => dispatch(editChosenFeat(feat.id, feat)),
  deleteFeat: (feat) => dispatch(deleteChosenFeat(feat.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeaturesAndTraitsModal);
