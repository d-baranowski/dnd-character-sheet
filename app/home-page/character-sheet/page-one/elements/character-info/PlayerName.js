import React from 'react';
import characterInfoSlot from './CharacterInfoSlot';

const PlayerName = characterInfoSlot({
  formName: 'playerName',
  label: 'Player Name',
  textTransform: 'matrix(1.33333 0 0 1.33333 640.32 93.667)',
  x: 630,
  y: 60,
  width: 100,
  height: 35
});

export default PlayerName;
