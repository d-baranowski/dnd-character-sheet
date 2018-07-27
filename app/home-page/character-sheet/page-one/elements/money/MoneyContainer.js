import React from 'react';
import Copper from './Copper';
import Electrum from './Electrum';
import Platinum from './Platinum';
import Gold from './Gold';
import Silver from './Silver';

const MoneyContainer = () => (
  <g>
    <Copper />
    <Silver />
    <Electrum />
    <Gold />
    <Platinum />
  </g>
);

export default MoneyContainer;
