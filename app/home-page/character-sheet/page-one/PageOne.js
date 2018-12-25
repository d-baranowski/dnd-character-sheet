import React from 'react';
import HitPoints from './elements/hit-points/HitPoints';
import GrayDecorations from '../../GrayDecorations';
import CharacterName from './elements/character-info/character-name/CharacterName';
import PersonalityTraits from './elements/personality-section/PersonalityTraits';
import Ideals from './elements/personality-section/Ideals';
import Bonds from './elements/personality-section/Bonds';
import Flaws from './elements/personality-section/Flaws';
import Logo from './elements/Logo';
import ArmorClass from './elements/armor-class/ArmorClass';
import DeathSaves from './elements/death-saves/DeathSaves';
import Initiative from './elements/initiative/Initiative';
import Speed from './elements/Speed';
import ProficiencyBonus from './elements/ProficiencyBodnus.container';
import PassiveWisdom from './elements/PassiveWisdom';
import AttributesContainer from './elements/attributes/AttributesContainer';
import HitDice from './elements/hit-dice/HitDice';
import MoneyContainer from './elements/money/MoneyContainer';
import SkillsContainer from './elements/skills/SkillsContainer';
import SavingThrowsContainer from './elements/saving-throws/SavingThrowsContainer';
import Legal from './elements/Legal';
import InspirationContainer from './elements/inspiration/InspirationContainer';
import OtherCharacterInfo from './elements/character-info/OtherCharacterInfo';
import Attacks from './elements/attacks/Attacks';
import Wealth from './elements/Wealth';
import FeaturesAndTraits from './elements/features-and-fraits/FeaturesAndTraits';
import ProficienciesAndLanguages from './elements/Languages';
import FeaturesAndTraitsModal from './elements/features-and-fraits/FeaturesAndTraitsModal';
import AlignmentPicker from './elements/character-info/alignment/AlignmentPicker';
import AttacksModal from './elements/attacks/AttacksModal';
import MenuDrawer from '../../menu-drawer/MenuDrawer';
import PanZoom from '../PanZoom';
import HitDiceSelector from "./elements/hit-dice/HitDiceSelector";
import connectSimpleForm from "../../../form/connectSimpleForm";



class PageOne extends React.PureComponent {

  render() {
    return (
      <MenuDrawer>
        <AttacksModal />
        <FeaturesAndTraitsModal />
        <HitDiceSelector/>
        <PanZoom
          value={this.props.formValue}
          setValue={this.props.changeValue}
        >
          <GrayDecorations />
          <Logo />
          <CharacterName />
          <HitPoints />
          <ProficiencyBonus />
          <PersonalityTraits />
          <Ideals />
          <Bonds />
          <Flaws />
          <Initiative />
          <Speed />
          <ArmorClass />
          <DeathSaves />
          <PassiveWisdom />
          <HitDice />
          <AttributesContainer />
          <SkillsContainer />
          <SavingThrowsContainer />
          <InspirationContainer />
          <OtherCharacterInfo />
          <Attacks />
          <Wealth />
          <MoneyContainer />
          <FeaturesAndTraits />
          <ProficienciesAndLanguages />
          <Legal />
          <AlignmentPicker />
          <path d="M361 83 h 367 Z" stroke="#dedfdf" />
          <path d="M361 117 h 367 Z" stroke="#dedfdf" />
        </PanZoom>
      </MenuDrawer>
    );
  }
}

export default connectSimpleForm("PageOnePanZoom")(PageOne);

