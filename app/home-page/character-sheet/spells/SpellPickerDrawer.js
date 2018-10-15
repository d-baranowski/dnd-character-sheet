import React from 'react';
import {connect} from 'react-redux';
import spells from './spells.json';
import drawerRoute from '../../menu-drawer/drawerRoute';
import styles from '../../../form/ListPickerDrawer.css';
import {readSpell, pickSpell} from "./spellsActions";
import {closeDrawer} from "../../menu-drawer/state/menuDrawerActions";

export const SpellsDrawerRoute = "Spells";

class SpellsDrawer extends React.PureComponent {
  allPossibleValues = () => {
    return spells.byClass[this.props.spellCastingClass][this.props.level].concat("New Spell").sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  };

  render() {
    const matchingSpells = this.allPossibleValues().filter((spellName) => spellName.toUpperCase().includes(this.props.searchTerm.toUpperCase()));

    return (
      <div>
        {
          matchingSpells.map((spellName) => (
            <div style={{marginTop: 10}}>
              <h3
                style={{display: 'inline-block'}}
                key={spellName}
                className={styles.itemName}
                onClick={() => this.props.readSpell(spellName)}
              >
                {spellName}
              </h3>
              <svg
                onClick={() => this.props.pickSpell(spellName, this.props.level)}
                className={styles.addItem}
                width={20}
                height={20}
              >
                <use xlinkHref="#icon-add"/>
              </svg>
            </div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  readSpell: (spellName) => dispatch(readSpell(spellName)),
  pickSpell: (spellName, level) => { dispatch(pickSpell(spellName, level)); dispatch(closeDrawer()) }
});

export default drawerRoute(SpellsDrawerRoute)(connect(mapStateToProps, mapDispatchToProps)(SpellsDrawer));
