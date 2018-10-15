import React from 'react';
import PropTypes from 'prop-types';
import SpellsBucket from "./SpellsBucket";

const SpellsLevelOne = ({spellCastingClass}) => (
  <SpellsBucket
    spellLevel={1}
    bucketSize={6}
    castingClass={spellCastingClass}
    arrowsY={670}
    arrowsX={39}
    spellsX={43}
    spellsY={227}
  />
);

SpellsLevelOne.propTypes = {};

export default SpellsLevelOne;
