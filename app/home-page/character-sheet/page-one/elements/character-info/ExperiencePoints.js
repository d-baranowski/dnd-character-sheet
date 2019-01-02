import React from 'react';
import characterInfoSlot from './CharacterInfoSlot';

const ExperiencePoints = characterInfoSlot({
  formName: 'experience',
  label: 'Experience Points',
  textTransform: 'matrix(1.33333 0 0 1.33333 640.32 128.697)',
  x: 630,
  y: 95,
  width: 120,
  height: 35,
  limitValue: 10,
  type: 'number'
});

export default ExperiencePoints;
