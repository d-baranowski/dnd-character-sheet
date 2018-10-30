import React from 'react';
import SpellsBucket from "./SpellsBucket";

const SpellsLevelSeven = ({spellCastingClass, prepared}) => (
  <SpellsBucket
    spellLevel={7}
    bucketSize={7}
    castingClass={spellCastingClass}
    arrowsY={595}
    arrowsX={540}
    spellsX={547}
    spellsY={470}
    prepared={prepared}
  />
);

SpellsLevelSeven.propTypes = {};

export default SpellsLevelSeven;
