import React from 'react';
import {ReactSVGPanZoom} from 'react-svg-pan-zoom';
import CurrentHitPoints from './PageOne/CurrentHitPoints';
import GrayBackground from './PageOne/GrayBackground';
import CharacterName from './PageOne/CharacterName';
import PersonalityTraits from './PageOne/PersonalitySection/PersonalityTraits';
import Ideals from './PageOne/PersonalitySection/Ideals';
import Bonds from './PageOne/PersonalitySection/Bonds';
import Flaws from './PageOne/PersonalitySection/Flaws';
import Logo from './PageOne/Logo';
import TemporaryHitPoints from './PageOne/TemporaryHitPoints';
import ArmorClass from './PageOne/ArmorClass';
import DeathSaves from './PageOne/DeathSaves';
import Initiative from './PageOne/Initiative';
import Speed from './PageOne/Speed';
import ProficiencyBonus from './PageOne/ProficiencyBodnus';
import PassiveWisdom from './PageOne/PassiveWisdom';
import AttributesContainer from './PageOne/Attributes/AttributesContainer';
import HitDice from './PageOne/HitDice';
import MoneyContainer from './PageOne/Money/MoneyContainer';
import Skills from './PageOne/Skills/Skills';
import SavingThrows from './PageOne/SavingThrows/SavingThrows';
import Legal from './PageOne/Legal';
import Inspiration from './PageOne/Inspiration';
import OtherCharacterInfo from './PageOne/OtherCharacterInfo/OtherCharacterInfo';
import Attacks from './PageOne/Attacks';
import Equipment from './PageOne/Equipment';
import FeaturesAndTraits from './PageOne/FeaturesAndTraits';
import ProficiencesAndLanguages from './PageOne/ProficiencesAndLanguages';


const CharacterSheet3PgsComplete01 = props => (
  <ReactSVGPanZoom
    width="100%"
    height={1000}
    tool='auto'
    toolbarPosition='none'
    scaleFactorOnWheel={1.3}
    miniaturePosition='none'
    disableDoubleClickZoomWithToolAuto
  >
    <svg height={1056} width={816} {...props}>
      <GrayBackground />
      <Logo />
      <CharacterName />
      <TemporaryHitPoints />
      <CurrentHitPoints />
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
      <Skills />
      <SavingThrows />
      <Inspiration />
      <OtherCharacterInfo />
      <Attacks />
      <Equipment />
      <MoneyContainer />
      <FeaturesAndTraits />
      <ProficiencesAndLanguages />
      <Legal />
    </svg>
  </ReactSVGPanZoom>
);

export default CharacterSheet3PgsComplete01;

