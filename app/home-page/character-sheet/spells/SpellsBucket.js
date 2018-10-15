import React from 'react';
import AddButton from '../../../form/AddButton';
import LeftArrow from '../../../form/LeftArrow';
import RightArrow from '../../../form/RightArrow';
import {setDrawerRoute} from '../../menu-drawer/state/menuDrawerActions';
import {SpellsDrawerRoute} from './SpellPickerDrawer';
import connect from "react-redux/es/connect/connect";
import styles from "../inventory/equipment-table/EquipmentTable.scss";
import {paginate} from "../page-one/elements/features-and-fraits/state/featuresAndTraitsReducer";
import {setPage, editSpell} from "./spellsActions";

class SpellsBucket extends React.PureComponent {
  incrementPage = () => {
    this.props.setPage(this.props.page + 1, this.props.spellLevel);
  };

  decrementPage = () => {
    this.props.setPage(this.props.page -1, this.props.spellLevel);
  };

  render() {
    const {showEditor, spells, editSpell} = this.props;
    return (
      <g>
        {
          paginate(Object.values(spells), this.props.bucketSize, this.props.page).map((val, index) => {
            return (
              <React.Fragment>
                <foreignObject x={this.props.spellsX} y={this.props.spellsY + index * 19}>
                  <div
                    style={{
                      height: '18px',
                      width: '227px',
                      border: 'none',
                      fontFamily: 'Zelda',
                      fontSize: 'small',
                      textAlign: 'center'
                    }}
                    onClick={() => editSpell(val.id)}
                    className={styles.presable}
                  >
                    {val.name}
                  </div>
                </foreignObject>
              </React.Fragment>
            )
          })
        }
        <AddButton
          onClick={() => showEditor(this.props.castingClass, this.props.spellLevel)}
          width={22}
          x={this.props.arrowsX + 110}
          y={this.props.arrowsY + 5}
        />
        {this.props.page !== 1 && <LeftArrow x={this.props.arrowsX} y={this.props.arrowsY} onClick={this.decrementPage}/>}
        {Math.ceil(Object.values(this.props.spells).length / this.props.bucketSize) > this.props.page &&
        <RightArrow x={this.props.arrowsX + 110 + 91} y={this.props.arrowsY} onClick={this.incrementPage}/>}
      </g>
    )
  }
};


const mapStateToProps = (state, ownProps) => ({
  spells: state.spellsReducer.chosenSpells[ownProps.spellLevel] || {},
  page: state.spellsReducer.page[ownProps.spellLevel]
});
const mapDispatchToProps = (dispatch) => ({
  showEditor: (spellCastingClass, level) => dispatch(setDrawerRoute(SpellsDrawerRoute, {
    hasSearchBar: true,
    spellCastingClass,
    level
  })),
  setPage: (page, level) => dispatch(setPage(page, level)),
  editSpell: (id) => dispatch(editSpell(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SpellsBucket);
