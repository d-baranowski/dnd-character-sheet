import React from 'react';
import {connect} from "react-redux";
import spellSlotsPerClass from "./spellSlotsPerClass";

const SpellSlotsTotal = ({spellSlots = []}) => (
  <React.Fragment>
    <foreignObject  x="66" y={414}>
      <div style={{
        height: '37px',
        lineHeight: "37px",
        width: '60px',
        border: 'none',
        fontFamily: 'Scala Sans Offc',
        fontSize: 'small',
        textAlign: 'center' }}>
        {spellSlots[0]}
      </div>
    </foreignObject>
    <foreignObject  x="66" y={718}>
      <div style={{
        height: '37px',
        lineHeight: "37px",
        width: '60px',
        border: 'none',
        fontFamily: 'Scala Sans Offc',
        fontSize: 'small',
        textAlign: 'center' }}>
        {spellSlots[1]}
      </div>
    </foreignObject>
    <foreignObject  x="318" y={190}>
      <div style={{
        height: '37px',
        lineHeight: "37px",
        width: '60px',
        border: 'none',
        fontFamily: 'Scala Sans Offc',
        fontSize: 'small',
        textAlign: 'center' }}>
        {spellSlots[2]}
      </div>
    </foreignObject>

    <foreignObject  x="318" y={491}>
      <div style={{
        height: '37px',
        lineHeight: "37px",
        width: '60px',
        border: 'none',
        fontFamily: 'Scala Sans Offc',
        fontSize: 'small',
        textAlign: 'center' }}>
        {spellSlots[3]}
      </div>
    </foreignObject>
    <foreignObject  x="318" y={792}>
      <div style={{
        height: '37px',
        lineHeight: "37px",
        width: '60px',
        border: 'none',
        fontFamily: 'Scala Sans Offc',
        fontSize: 'small',
        textAlign: 'center' }}>
        {spellSlots[4]}
      </div>
    </foreignObject>

    <foreignObject x="568" y={190}>
      <div style={{
        height: '37px',
        lineHeight: "37px",
        width: '60px',
        border: 'none',
        fontFamily: 'Scala Sans Offc',
        fontSize: 'small',
        textAlign: 'center' }}>
        {spellSlots[5]}
      </div>
    </foreignObject>
    <foreignObject x="568" y={416}>
      <div style={{
        height: '37px',
        lineHeight: "37px",
        width: '60px',
        border: 'none',
        fontFamily: 'Scala Sans Offc',
        fontSize: 'small',
        textAlign: 'center' }}>
        {spellSlots[6]}
      </div>
    </foreignObject>
    <foreignObject x="568" y={644}>
      <div style={{
        height: '37px',
        lineHeight: "37px",
        width: '60px',
        border: 'none',
        fontFamily: 'Scala Sans Offc',
        fontSize: 'small',
        textAlign: 'center' }}>
        {spellSlots[7]}
      </div>
    </foreignObject>
    <foreignObject x="568" y={830}>
      <div style={{
        height: '37px',
        lineHeight: "37px",
        width: '60px',
        border: 'none',
        fontFamily: 'Scala Sans Offc',
        fontSize: 'small',
        textAlign: 'center' }}>
        {spellSlots[8]}
      </div>
    </foreignObject>

  </React.Fragment>
);

SpellSlotsTotal.propTypes = {};

const mapStateToProps = (state, ownProps) => {
  const level = state.homePageReducer.classesReducer.classes[ownProps.spellCastingClass].level;
  const spellSlots = level && spellSlotsPerClass[ownProps.spellCastingClass][level > 20 ? 20 : level];

  return {
    spellSlots
  }
};

export default connect(mapStateToProps)(SpellSlotsTotal);
