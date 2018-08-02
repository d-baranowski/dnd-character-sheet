import React from 'react';
import electron from 'electron';
import {ReactSVGPanZoom} from 'react-svg-pan-zoom';
import CurrentHitPoints from './elements/CurrentHitPoints';
import GrayBackground from './elements/GrayBackground';
import CharacterName from './elements/character-info/character-name/CharacterName';
import PersonalityTraits from './elements/personality-section/PersonalityTraits';
import Ideals from './elements/personality-section/Ideals';
import Bonds from './elements/personality-section/Bonds';
import Flaws from './elements/personality-section/Flaws';
import Logo from './elements/Logo';
import TemporaryHitPoints from './elements/TemporaryHitPoints';
import ArmorClass from './elements/ArmorClass';
import DeathSaves from './elements/DeathSaves';
import Initiative from './elements/Initiative';
import Speed from './elements/Speed';
import ProficiencyBonus from './elements/ProficiencyBodnus';
import PassiveWisdom from './elements/PassiveWisdom';
import AttributesContainer from './elements/attributes/AttributesContainer';
import HitDice from './elements/HitDice';
import MoneyContainer from './elements/money/MoneyContainer';
import Skills from './elements/skills/Skills';
import SavingThrowsContainer from './elements/saving-throws/SavingThrowsContainer';
import Legal from './elements/Legal';
import Inspiration from './elements/Inspiration';
import OtherCharacterInfo from './elements/character-info/OtherCharacterInfo';
import Attacks from './elements/Attacks';
import Equipment from './elements/Equipment';
import FeaturesAndTraits from './elements/FeaturesAndTraits';
import ProficienciesAndLanguages from './elements/ProficiencesAndLanguages';
import SvgFilters from '../../../svg-style/SvgFilters';

const {remote} = electron;

class PageOne extends React.PureComponent {
  constructor() {
    super();
    this.resizeToBounds();
    remote.getCurrentWindow().on('resize', () => {
      this.resizeToBounds();
    });
  }

  state = {
    width: 0,
    height: 0
  };

  resizeToBounds() {
    setTimeout(() => {
      const bounds = remote.getCurrentWindow().webContents.getOwnerBrowserWindow().getBounds()
      this.setState({
        width: bounds.width - 50,
        height: bounds.height - 125
      });
    }, 0)

  };

  render() {
    return (
      <ReactSVGPanZoom
        width={this.state.width}
        height={this.state.height}
        scaleFactorOnWheel={1.3}
        tool='auto'
        miniaturePosition='none'
        toolbarPosition='none'
        disableDoubleClickZoomWithToolAuto
      >
        <svg height={1056} width={816}>
          <defs>
            <SvgFilters />
          </defs>

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
          <SavingThrowsContainer />
          <Inspiration />
          <OtherCharacterInfo />
          <Attacks />
          <Equipment />
          <MoneyContainer />
          <FeaturesAndTraits />
          <ProficienciesAndLanguages />
          <Legal />
        </svg>
      </ReactSVGPanZoom>
    );
  }
}

export default PageOne;

