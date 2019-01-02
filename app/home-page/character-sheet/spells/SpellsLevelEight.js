import React from 'react';
import SpellsBucket from './SpellsBucket';

const SpellsLevelSeven = ({ spellCastingClass, prepared }) => (
  <SpellsBucket
    spellLevel={8}
    bucketSize={5}
    castingClass={spellCastingClass}
    arrowsY={780}
    arrowsX={540}
    spellsX={547}
    spellsY={698}
    prepared={prepared}
  />
);

SpellsLevelSeven.propTypes = {};

export default SpellsLevelSeven;
