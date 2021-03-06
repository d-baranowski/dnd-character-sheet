import React from 'react';
import MenuDrawer from '../../menu-drawer/MenuDrawer';
import PanZoom from '../PanZoom';
import GrayDecorations from '../../GrayDecorations';
import TopBarDecorativeMonsters from './TopBarDecorativeMonsters';
import TopBar from './TopBar';
import CharacterArt from './CharacterArt';
import EquipmentSlots from './equipment-slots/EquipmentSlots';
import EquipmentTable from './equipment-table/EquipmentTable';
import EquipmentModal from './equipment-table/EquipmentModal';
import EquipedModal from './equipment-slots/EquipedModal';

const Inventory = () => (
  <MenuDrawer>
    <EquipmentModal />
    <EquipedModal />
    <PanZoom>
      <GrayDecorations />
      <TopBarDecorativeMonsters />
      <TopBar />
      <CharacterArt />
      <EquipmentSlots />
      <EquipmentTable />
    </PanZoom>
  </MenuDrawer>
);

export default Inventory;
