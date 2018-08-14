import React from 'react';
import electron from 'electron';
import {ReactSVGPanZoom} from 'react-svg-pan-zoom';
import HitPoints from './elements/hit-points/HitPoints';
import GrayBackground from './elements/GrayBackground';
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
import HitDice from './elements/HitDice';
import MoneyContainer from './elements/money/MoneyContainer';
import SkillsContainer from './elements/skills/SkillsContainer';
import SavingThrowsContainer from './elements/saving-throws/SavingThrowsContainer';
import Legal from './elements/Legal';
import InspirationContainer from './elements/inspiration/InspirationContainer';
import OtherCharacterInfo from './elements/character-info/OtherCharacterInfo';
import Attacks from './elements/Attacks';
import Wealth from './elements/Wealth';
import FeaturesAndTraits from './elements/features-and-fraits/FeaturesAndTraits';
import ProficienciesAndLanguages from './elements/Languages';
import SvgFilters from '../../../svg-style/SvgFilters';
import FeaturesAndTraitsModal from './elements/features-and-fraits/FeaturesAndTraitsModal';
import AlignmentPicker from './elements/character-info/alignment/AlignmentPicker';

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
        height: bounds.height - 70
      });
    }, 0)

  };

  render() {
    return (
      <React.Fragment>
        <FeaturesAndTraitsModal />
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
          </svg>
        </ReactSVGPanZoom>
      </React.Fragment>
    );
  }
}

export default PageOne;

