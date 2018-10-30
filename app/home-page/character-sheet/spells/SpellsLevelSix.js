import React from 'react';
import SpellsBucket from "./SpellsBucket";

const SpellsLevelsix = ({spellCastingClass, prepared}) => (
  <SpellsBucket
    spellLevel={6}
    bucketSize={7}
    castingClass={spellCastingClass}
    arrowsY={345}
    arrowsX={540}
    spellsX={547}
    spellsY={241}
    prepared={prepared}
  />
);

SpellsLevelsix.propTypes = {};

export default SpellsLevelsix;
