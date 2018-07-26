import React from 'react';
import Strength from './Strength';
import Dexterity from './Dexterity';
import Constitution from './Constitution';
import Intelligence from './Intelligence';
import Wisdom from './Wisdom';
import Charisma from './Charisma';

const AttributesContainer = () => (
  <g>
    <Strength />
    <Dexterity />
    <Constitution />
    <Intelligence />
    <Wisdom />
    <Charisma />
  </g>
);

export default AttributesContainer;
