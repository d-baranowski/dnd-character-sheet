import React from 'react';
import {Button, Header, Modal} from 'semantic-ui-react';
import {Cropper} from 'react-image-cropper'
import {connect} from 'react-redux';
import {closeModal, setCharacterArt} from '../state/backgroundActions';

class AlignmentPicker extends React.PureComponent {
  constructor() {
    super();
    this.filePicker = React.createRef();
    this.state = {
      file: ""
    };
  }

  handleClose = () => {
    const values = this.cropper.values();
    const {x, y, width, height} = values.display;
    this.props.handleClose(x, y, width, height);
  };

  triggerFilePicker = () => {
    this.filePicker.click();
  };

  setImage = () => {
    if (this.filePicker.files[0]) {
      this.setState({file: this.filePicker.files[0].path})
    }
  };

  onChange = () => {
    this.props.setCharacterArt(this.cropper.crop());
  };

  render() {
    return (
      <Modal
        trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
        open={this.props.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header style={{ cursor: 'pointer' }} onClick={this.triggerFilePicker} content='Choose Art' />
        <Modal.Content>
          <input type="file" id="file" onChange={this.setImage} ref={ ref => { this.filePicker = ref }} style={{display: "none"}} />
          <Cropper
            width={this.props.width}
            height={this.props.height}
            originX={this.props.x}
            originY={this.props.y}
            ratio={0.742424}
            fixedRatio={true}
            src={this.state.file}
            ref={ ref => { this.cropper = ref }}
            onChange={this.onChange}
          />
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => ({
  modalOpen: state.homePageReducer.backgroundReducer.modalOpen,
  x: state.homePageReducer.backgroundReducer.pickerX,
  y: state.homePageReducer.backgroundReducer.pickerY,
  width: state.homePageReducer.backgroundReducer.width,
  height: state.homePageReducer.backgroundReducer.height
});

const mapDispatchToProps = (dispatch) => ({
  setCharacterArt: (value) => dispatch(setCharacterArt(value)),
  handleClose: (x, y, width, height) => dispatch(closeModal(x, y, width, height))
});

export default connect(mapStateToProps, mapDispatchToProps)(AlignmentPicker);
