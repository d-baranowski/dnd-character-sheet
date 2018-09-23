import React from 'react';
import EquipmentSlot from "./EquipmentSlot";

const EquipmentSlots = () => (
  <g id="boxes">
    <EquipmentSlot slotName="slotOne" />
    <EquipmentSlot slotName="slotTwo" translate="translate(0, 100)" />
    <EquipmentSlot slotName="slotThree" translate="translate(0, 200)" />
    <EquipmentSlot slotName="slotFour" translate="translate(0, 300)" />
    <EquipmentSlot slotName="slotFive" translate="translate(0, 400)" />

    <EquipmentSlot slotName="slotSix" translate="translate(274, 0)" />
    <EquipmentSlot slotName="slotSeven" translate="translate(274, 400)" />

    <EquipmentSlot slotName="slotEight" translate="translate(548, 0)" />
    <EquipmentSlot slotName="slotNine" translate="translate(548, 100)" />
    <EquipmentSlot slotName="slotTen" translate="translate(548, 200)" />
    <EquipmentSlot slotName="slotEleven" translate="translate(548, 300)" />
    <EquipmentSlot slotName="slotTwelve" translate="translate(548, 400)" />
  </g>
);

export default EquipmentSlots;
