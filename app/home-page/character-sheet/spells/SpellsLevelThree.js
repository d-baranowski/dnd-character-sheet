import React from 'react';
import SpellsBucket from "./SpellsBucket";

const SpellsLevelThree = ({spellCastingClass, prepared}) => (
  <SpellsBucket
    spellLevel={3}
    bucketSize={9}
    castingClass={spellCastingClass}
    arrowsY={440}
    arrowsX={295}
    spellsX={302}
    spellsY={241}
    prepared={prepared}
  />
);

SpellsLevelThree.propTypes = {};

export default SpellsLevelThree;
