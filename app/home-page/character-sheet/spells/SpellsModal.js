import React from 'react';
import {Input, Modal, TextArea} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {closeModal, deleteSpell, changeSpell} from "./spellsActions";
const ReactMarkdown = require('react-markdown');

const ViewMode = ({spell}) => (
  <React.Fragment>
    <Modal.Header>{spell.name}</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <ReactMarkdown source={Array.isArray(spell.content) ?
          spell.content.join('\n\n') : spell.content
        } />
      </Modal.Description>
    </Modal.Content>
  </React.Fragment>
);

class EditMode extends React.PureComponent {
  state = {
    spellName: this.props.spell.name,
    spellDesc: Array.isArray(this.props.spell.content) ? this.props.spell.content.join('\n\n') : this.props.spell.content
  };

  handleDescUpdate(spellDesc) {
    const {handleChange, spell} = this.props;

    this.setState({
      spellDesc
    });

    handleChange({id: spell.id, content: spellDesc, name: this.state.spellName})
  }

  handleNameUpdate(spellName) {
    const {handleChange, spell} = this.props;

    this.setState({
      spellName
    });

    handleChange({id: spell.id, content: this.state.spellDesc, name: spellName});
  }

  render() {
    return (
      <React.Fragment>
        <Modal.Header>
          <Input
            autoFocus
            placeholder='Spell Name'
            value={this.state.spellName}
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
          value={this.state.spellDesc}
          onChange={(event) => this.handleDescUpdate(event.target.value)}
        />
          </Modal.Description>
        </Modal.Content>
      </React.Fragment>
    );
  }
}

class SpellsModal extends React.PureComponent {
  state = {
    edit: false
  };

  deleteSpell = (spell) =>
  {
    this.props.deleteSpell(spell.id);
    this.props.closeModal();
  };

  enterEditMode = () => {
    if (this.props.spell.id) {
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
    const {spell = {}, modalOpen} = this.props;
    const {edit} = this.state;
    const canEdit = !!spell.id;
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
          onClick={() => {this.deleteSpell(spell)}}
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
        {!edit && <ViewMode spell={spell} /> || <EditMode handleChange={this.props.onChange} spell={spell} />}
      </Modal>
    )
  }
}

const mapStateToProps = (state) => ({
  spell: state.spellsReducer.modalSpell,
  modalOpen:  state.spellsReducer.modalOpen
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  onChange: (spell) => dispatch(changeSpell(spell)),
  deleteSpell: (spellId) => dispatch(deleteSpell(spellId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SpellsModal);
