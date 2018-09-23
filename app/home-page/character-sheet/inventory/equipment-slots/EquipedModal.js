import React from 'react';
import _ from 'lodash'
import {connect} from 'react-redux';
import {Modal, Search} from 'semantic-ui-react';
import {closeModal, selectItem} from '../state/equipedActions';

const findResults = (value, source) => {
  const re = new RegExp(_.escapeRegExp(value), 'i');
  const isMatch = result => re.test(result.name);

  return _.filter(source, isMatch);
};

const resultRenderer = (value) => (value.name);

class EquipedModal extends React.PureComponent {
  state = {
    searchTerm: ""
  };

  constructor() {
    super();
  }

  updateSearch(value) {
    this.setState({
      searchTerm: value
    })
  }

  handleResultSelect = (e, {result}) => {
    this.props.selectItem(result, this.props.slot);
    this.props.closeModal();
  };

  render() {
    const {removeItem, modalOpen, closeModal , equipment} = this.props;
    const results = findResults(this.state.searchTerm, equipment);

    return (
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
          <use xlinkHref="#icon-delete"/>
        </svg>
        <Modal.Header>{'Equip Item'}</Modal.Header>
        <Modal.Content>
          <div>
            <h3>Equip Item</h3>
            <Search
              loading={false}
              onResultSelect={this.handleResultSelect}
              onSearchChange={(e, {value}) => {
                this.updateSearch(value)
              }}
              results={results}
              resultRenderer={resultRenderer}
              value={this.state.searchTerm}
            />
          </div>
        </Modal.Content>
      </Modal>
    );
  };
}

const mapStateToProps = (state) => {
  const equipment = Object.values(state.equipmentReducer.inventory).reduce((accumulator, value) => {
    return [...accumulator, ...Object.values(value)];
  }, []);

  const slot = state.equipedReducer.modalEditSlot;
  return {
    equipment,
    slot,
    modalOpen: state.equipedReducer.modalOpen,
    value: state.equipedReducer[slot]
  };
};

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
  selectItem: (item, slot) => dispatch(selectItem(item, slot))
});

export default connect(mapStateToProps, mapDispatchToProps)(EquipedModal);
