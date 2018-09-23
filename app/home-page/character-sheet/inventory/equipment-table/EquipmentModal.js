import React from 'react';
import {connect} from 'react-redux';
import {Input, Modal, TextArea} from 'semantic-ui-react';
import {closeModal, removeItem, updateItem} from '../state/equipmentActions';
import {findBasket} from '../state/equipmentReducer';


const EquipmentModal = ({updateItem, removeItem, modalOpen, item, closeModal}) => (
  <Modal
    open={modalOpen}
    onClose={closeModal}
  >
    <svg
      onClick={() => {
        removeItem(item.id)
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
    <Modal.Header>{item.name || 'Edit Item'}</Modal.Header>
    <Modal.Content>
      <div>
        <h3>Item Name</h3>
        <Input
          style={{marginBottom: 10}}
          autoFocus
          placeholder='Item Name'
          value={item.name}
          onChange={(event) => updateItem({...item, name: event.target.value})}
        />
      </div>
      <div>
        <h3>Quantity</h3>
        <Input
          style={{marginBottom: 10}}
          placeholder='Quantity'
          value={item.quantity}
          onChange={(event) => updateItem({...item, quantity: !isNaN(parseInt(event.target.value)) ? parseInt(event.target.value) : 0 })}
        />
      </div>
      <div>
        <h3>Weight</h3>
        <Input
          style={{marginBottom: 10}}
          placeholder='Weight'
          value={item.weight}
          onChange={(event) => updateItem({...item, weight: event.target.value.match("([0-9]|\.)+") ? event.target.value.match(new RegExp("([0-9.])+"))[0] : 0 })}/>
      </div>
      <div>
        <h3>Notes</h3>
        <TextArea
          style={{width: '100%'}}
          autoHeight
          label="Notes"
          placeholder="Notes"
          value={item.notes}
          onChange={(event) => updateItem({...item, notes: event.target.value})}
        />
      </div>
    </Modal.Content>
  </Modal>
);

const mapStateToProps = (state) => {
  const {modalOpen, modalEditId, inventory} = state.equipmentReducer;
  const basket = findBasket(state.equipmentReducer, modalEditId);
  return {
    modalOpen,
    item: basket && {...inventory[basket][modalEditId] || {}} || {}
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeItem: (id) => dispatch(removeItem(id)),
  updateItem: (item) => dispatch(updateItem(item)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentModal);
