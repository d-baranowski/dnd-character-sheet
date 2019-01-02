import React from 'react';
import characterInfoSlot from './CharacterInfoSlot';

const Race = characterInfoSlot({
  formName: 'race',
  label: 'Race',
  textTransform: 'matrix(1.33333 0 0 1.33333 360.96 128.44)',
  x: 360,
  y: 95,
  width: 120,
  height: 35
});

export default Race;
