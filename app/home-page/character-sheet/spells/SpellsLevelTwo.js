import React from 'react';
import SpellsBucket from './SpellsBucket';

const SpellsLevelTwo = ({ spellCastingClass, prepared }) => (
  <SpellsBucket
    spellLevel={2}
    bucketSize={9}
    castingClass={spellCastingClass}
    arrowsY={970}
    arrowsX={39}
    spellsX={43}
    spellsY={773}
    prepared={prepared}
  />
);

SpellsLevelTwo.propTypes = {};

export default SpellsLevelTwo;
