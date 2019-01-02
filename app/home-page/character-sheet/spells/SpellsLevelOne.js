import React from 'react';
import SpellsBucket from './SpellsBucket';

const SpellsLevelOne = ({ spellCastingClass, prepared }) => (
  <SpellsBucket
    spellLevel={1}
    bucketSize={9}
    castingClass={spellCastingClass}
    arrowsY={630}
    arrowsX={39}
    spellsX={43}
    spellsY={470}
    prepared={prepared}
  />
);

SpellsLevelOne.propTypes = {};

export default SpellsLevelOne;
