import React from 'react';
import characterInfoSlot from './CharacterInfoSlot';

const BackgroundResult = characterInfoSlot({
  formName: 'background',
  label: 'Background',
  textTransform: 'matrix(1.33333 0 0 1.33333 511.3 93.667)',
  x: 505,
  y: 60,
  width: 120,
  height: 35
});

export default BackgroundResult;
