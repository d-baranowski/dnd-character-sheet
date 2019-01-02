import React from 'react';
import SpellsBucket from './SpellsBucket';

const SpellsLevelThree = ({ spellCastingClass, prepared }) => (
  <SpellsBucket
    spellLevel={4}
    bucketSize={11}
    castingClass={spellCastingClass}
    arrowsY={740}
    arrowsX={295}
    spellsX={302}
    spellsY={544}
    prepared={prepared}
  />
);

SpellsLevelThree.propTypes = {};

export default SpellsLevelThree;
