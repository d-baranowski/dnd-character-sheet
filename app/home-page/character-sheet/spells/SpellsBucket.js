import React from 'react';
import connect from 'react-redux/es/connect/connect';
import PropTypes from "prop-types";
import AddButton from '../../../form/AddButton';
import LeftArrow from '../../../form/LeftArrow';
import RightArrow from '../../../form/RightArrow';
import { setDrawerRoute } from '../../menu-drawer/state/menuDrawerActions';
import { SpellsDrawerRoute } from './SpellPickerDrawer';
import styles from './SpellsBucket.scss';
import { paginate } from '../page-one/elements/features-and-fraits/state/featuresAndTraitsReducer';
import { setPage, editSpell } from './spellsActions';

class SpellsBucket extends React.PureComponent {
  incrementPage = () => {
    this.props.setPage(this.props.page + 1, this.props.spellLevel);
  };

  decrementPage = () => {
    this.props.setPage(this.props.page - 1, this.props.spellLevel);
  };

  render() {
    const {
      showEditor,
      spells,
      editSpell,
      prepared: Prepared = () => null
    } = this.props;
    const visibleSpells = paginate(
      Object.values(spells),
      this.props.bucketSize,
      this.props.page
    );
    return (
      <g>
        {visibleSpells.map((val, index) => (
          <React.Fragment>
            <text
              fontSize="small"
              fontFamily="Scala Sans Offc"
              onClick={() => editSpell(val.id)}
              className={styles.presable}
              textAnchor="middle"
              x={this.props.spellsX + 113.5}
              y={this.props.spellsY + index * 19}
            >
              {val.name}
            </text>
          </React.Fragment>
        ))}
        <Prepared
          prepared={visibleSpells.map(val => ({
            prepared: val.prepared,
            spellId: val.id
          }))}
        />
        <AddButton
          onClick={() =>
            showEditor(this.props.castingClass, this.props.spellLevel)
          }
          width={22}
          x={this.props.arrowsX + 110}
          y={this.props.arrowsY + 5}
        />
        {this.props.page !== 1 && (
          <LeftArrow
            x={this.props.arrowsX}
            y={this.props.arrowsY}
            onClick={this.decrementPage}
          />
        )}
        {Math.ceil(
          Object.values(this.props.spells).length / this.props.bucketSize
        ) > this.props.page && (
          <RightArrow
            x={this.props.arrowsX + 110 + 91}
            y={this.props.arrowsY}
            onClick={this.incrementPage}
          />
        )}
      </g>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const allSpells = state.spellsReducer.chosenSpells[ownProps.spellLevel] || {};
  const spells = Object.entries(allSpells)
    .map(([key, value]) => ({ id: key, ...value }))
    .filter(obj => obj.spellCastingClass === ownProps.castingClass)
    .reduce((aggregate, currentValue) => {
      const newValue = { ...currentValue };
      return {
        ...aggregate,
        [currentValue.id]: newValue
      };
    }, {});

  return {
    spells,
    page: state.spellsReducer.page[ownProps.spellLevel]
  };
};
const mapDispatchToProps = dispatch => ({
  showEditor: (spellCastingClass, level) =>
    dispatch(
      setDrawerRoute(SpellsDrawerRoute, {
        hasSearchBar: true,
        spellCastingClass,
        level
      })
    ),
  setPage: (page, level) => dispatch(setPage(page, level)),
  editSpell: id => dispatch(editSpell(id))
});

SpellsBucket.propTypes = {
  showEditor: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  editSpell: PropTypes.func.isRequired,
  spells: PropTypes.object.isRequired,
  page: PropTypes.number.isRequired,
  arrowsX: PropTypes.number.isRequired,
  arrowsY: PropTypes.number.isRequired,
  spellsX: PropTypes.number.isRequired,
  spellsY: PropTypes.number.isRequired,
  bucketSize: PropTypes.number.isRequired,
  castingClass: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SpellsBucket);
