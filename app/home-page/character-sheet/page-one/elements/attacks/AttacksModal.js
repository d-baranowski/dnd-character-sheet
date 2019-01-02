import React from 'react';
import { connect } from 'react-redux';
import { Dropdown, Input, Modal, TextArea } from 'semantic-ui-react';
import { closeModal, removeAttack, updateAttack } from './state/attacksActions';
import FormCheckbox from '../../../../../form/FormCheckbox';

const AttacksModal = ({
  attack,
  modalOpen,
  closeModal,
  removeAttack,
  updateAttack
}) => (
  <Modal open={modalOpen} onClose={closeModal}>
    <svg
      onClick={() => {
        removeAttack(attack.id);
      }}
      width="1.28571429em"
      height="1.28571429em"
      style={{
        position: 'absolute',
        top: 21,
        right: 21
      }}
    >
      <use xlinkHref="#icon-delete" />
    </svg>
    <Modal.Header>{attack.name || 'Edit Attack'}</Modal.Header>
    <Modal.Content>
      <div>
        <h3>Attack Name</h3>
        <Input
          style={{ marginBottom: 10 }}
          autoFocus
          placeholder="Attack Name"
          value={attack.name}
          onChange={event =>
            updateAttack({ ...attack, name: event.target.value })
          }
        />
      </div>
      <div>
        <h3>Attribute</h3>
        <Dropdown
          style={{ marginBottom: 10 }}
          onChange={(e, { value }) =>
            updateAttack({ ...attack, attribute: value })
          }
          options={[
            { key: 'Str', text: 'Strength', value: 'Strength' },
            { key: 'Dex', text: 'Dexterity', value: 'Dexterity' },
            { key: 'Con', text: 'Constitution', value: 'Constitution' },
            { key: 'Int', text: 'Intelligence', value: 'Intelligence' },
            { key: 'Wis', text: 'Wisdom', value: 'Wisdom' },
            { key: 'Cha', text: 'Charisma', value: 'Charisma' }
          ]}
          placeholder="Attribute"
          selection
          value={attack.attribute}
        />
      </div>
      <FormCheckbox
        style={{ marginBottom: 10 }}
        input={{
          onChange: value => updateAttack({ ...attack, proficient: value })
        }}
        value={attack.proficient}
        label="Proficient"
      />
      <div>
        <h3>To Hit Bonus</h3>
        <Input
          style={{ marginBottom: 10 }}
          placeholder="To Hit Bonus"
          value={attack.otherBonus}
          onChange={event =>
            updateAttack({ ...attack, otherBonus: event.target.value })
          }
        />
      </div>
      <div>
        <h3>Damage Type</h3>
        <Input
          style={{ marginBottom: 10 }}
          placeholder="Damage Type"
          value={attack.damageType}
          onChange={event =>
            updateAttack({ ...attack, damageType: event.target.value })
          }
        />
      </div>
      <div>
        <h3>Damage Dice</h3>
        <Input
          style={{ marginBottom: 10 }}
          placeholder="Damage Dice"
          value={attack.damageDice}
          onChange={event =>
            updateAttack({ ...attack, damageDice: event.target.value })
          }
        />
      </div>
      <div>
        <h3>Damage Bonus</h3>
        <Input
          style={{ marginBottom: 10 }}
          placeholder="Damage Bonus"
          value={attack.otherBonus}
          onChange={event =>
            updateAttack({ ...attack, damageBonus: event.target.value })
          }
        />
      </div>
      <div>
        <h3>Notes</h3>
        <TextArea
          style={{ width: '100%' }}
          autoHeight
          label="Notes"
          placeholder="Notes"
          value={attack.notes}
          onChange={event =>
            updateAttack({ ...attack, notes: event.target.value })
          }
        />
      </div>
    </Modal.Content>
  </Modal>
);

const mapStateToProps = state => {
  const {
    modalOpen,
    modalEditSlot,
    attacks
  } = state.homePageReducer.attacksReducer;
  return {
    modalOpen,
    attack: { ...(attacks[modalEditSlot] || {}) }
  };
};

const mapDispatchToProps = dispatch => ({
  removeAttack: id => dispatch(removeAttack(id)),
  updateAttack: attack => dispatch(updateAttack(attack)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(AttacksModal);
