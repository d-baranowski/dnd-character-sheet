import React from 'react';
import SpellsBucket from "./SpellsBucket";

const SpellsLevelNine = ({spellCastingClass, prepared}) => (
  <SpellsBucket
    spellLevel={9}
    bucketSize={5}
    castingClass={spellCastingClass}
    arrowsY={970}
    arrowsX={540}
    spellsX={547}
    spellsY={884}
    prepared={prepared}
  />
);

SpellsLevelNine.propTypes = {};

export default SpellsLevelNine;
