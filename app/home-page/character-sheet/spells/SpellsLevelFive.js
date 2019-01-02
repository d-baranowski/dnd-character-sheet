import React from 'react';
import SpellsBucket from './SpellsBucket';

const SpellsLevelFive = ({ spellCastingClass, prepared }) => (
  <SpellsBucket
    spellLevel={5}
    bucketSize={7}
    castingClass={spellCastingClass}
    arrowsY={970}
    arrowsX={295}
    spellsX={302}
    spellsY={848}
    prepared={prepared}
  />
);

SpellsLevelFive.propTypes = {};

export default SpellsLevelFive;
