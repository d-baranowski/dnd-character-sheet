import React from 'react';
import {connect} from 'react-redux';
import Skill from './Skill';
import {setDrawerRoute} from '../../../../menu-drawer/state/menuDrawerActions';
import {SkillsDrawerRoute} from './SkillsDrawer';
import getValue from '../../../../../form/getValue';
import {mapAttributesFromStateToProps} from "../attributes/state/attributesReducer";


export const skills = [
  {name: "Acrobatics", attribute: "Dexterity"},
  {name: "Animal Handling", attribute: "Wisdom"},
  {name: "Arcana", attribute: "Intelligence"},
  {name: "Athletics", attribute: "Strength"},
  {name: "Deception", attribute: "Charisma"},
  {name: "History", attribute: "Intelligence"},
  {name: "Insight", attribute: "Wisdom"},
  {name: "Intimidation", attribute: "Charisma"},
  {name: "Investigation", attribute: "Intelligence"},
  {name: "Medicine", attribute: "Wisdom"},
  {name: "Nature", attribute: "Intelligence"},
  {name: "Perception", attribute: "Wisdom"},
  {name: "Performance", attribute: "Charisma"},
  {name: "Persuasion", attribute: "Charisma"},
  {name: "Religion", attribute: "Intelligence"},
  {name: "Sleight of Hand", attribute: "Dexterity"},
  {name: "Stealth", attribute: "Dexterity"},
  {name: "Survival", attribute: "Wisdom"},
];

class SkillsContainer extends React.PureComponent {
  state = {
    isHovered: false
  };

  onMouseOver = () => {
    this.setState({isHovered: true})
  };

  onMouseLeave = () => {
    this.setState({isHovered: false})
  };

  render() {
    return (
      <g>
        <g filter={this.state.isHovered && "url(#hardGlow)"} >
          <g transform="matrix(1.33333 0 0 -1.33333 0 1056)">
            <path id="SkillsBorder" d="M204.66 252.887l-.002 187.686c.316 5.13 1.078 15.529 2.257 19.355l.085.277-.246.152c-.017.01-.756.478-1.505 1.263.243 1.383.556 2.689.956 3.843l.05.139-1.015 11.302-.439.136c-1.03.32-3.969 1.605-3.969 3.264v.687H98.273v-.687c0-1.661-2.865-2.92-3.968-3.264l-.44-.137-1.014-11.301.05-.14c.4-1.151.71-2.453.953-3.833a8.613 8.613 0 0 0-1.503-1.272l-.246-.153.085-.276c1.177-3.821 1.94-14.195 2.255-19.333l.002-187.688c-.316-5.131-1.078-15.53-2.257-19.354l-.085-.277.246-.153a8.63 8.63 0 0 0 1.505-1.262c-.243-1.383-.555-2.69-.956-3.843l-.049-.14 1.014-11.301.44-.136c1.103-.345 3.968-1.604 3.968-3.264v-.687h102.56v.687c0 1.66 2.864 2.919 3.968 3.264l.44.136 1.013 11.3-.049.14c-.399 1.152-.71 2.455-.954 3.835a8.526 8.526 0 0 0 1.503 1.27l.246.155-.085.276c-1.177 3.82-1.939 14.195-2.255 19.334m-1.567-25.444c.005-.013.182-.431.415-1.052.103-.93.183-2.863-.544-4.99-1.205-3.524-4.152-6.102-8.539-7.536H104.65c-9.423 3.066-9.32 10.33-9.06 12.5.241.654.432 1.106.444 1.139.363 1.547-.142 2.885-.856 3.924 1.381 7.57.678 17.21.643 17.646l-.002 195.28c.037.48.741 10.139-.644 17.712.711 1.048 1.211 2.4.84 3.972-.006.013-.184.432-.417 1.052-.103.929-.183 2.862.544 4.99 1.206 3.524 4.152 6.102 8.54 7.536h89.775c9.423-3.066 9.32-10.331 9.061-12.501-.242-.653-.433-1.105-.445-1.14-.363-1.546.142-2.883.857-3.922-1.382-7.571-.679-17.211-.644-17.646l.002-195.282c-.037-.478-.74-10.137.644-17.711-.71-1.048-1.21-2.4-.838-3.971m3.026 232.436c-.699-2.471-1.243-7.063-1.633-11.436-.073 3.272-.024 8.035.614 12.264a9.799 9.799 0 0 1 1.02-.828m-2.338 5.864c.035.082.464 1.09.868 2.338l.207-2.31c-.277-.82-.51-1.706-.71-2.632-.386.762-.589 1.645-.365 2.604m.17 10.135l.507-5.658a16.977 16.977 0 0 0-.389-1.483 12.042 12.042 0 0 1-.634 3.504c-.823 2.408-2.816 5.459-7.534 7.375h3.637c.512-2.105 3.276-3.321 4.413-3.738m-104.386 3.738h3.632c-6.802-2.761-8.044-7.94-8.146-10.932-.156.504-.3 1.03-.406 1.536l.507 5.658c1.137.417 3.902 1.633 4.413 3.738m-5.318-13.844l.207 2.309c.4-1.236.822-2.225.848-2.277.228-.973.031-1.867-.35-2.637a24.325 24.325 0 0 1-.705 2.605m-.244-5.062c.638-4.223.688-8.983.615-12.265-.39 4.372-.934 8.963-1.633 11.434.233.163.608.446 1.018.83m-1.018-227.107c.7 2.47 1.243 7.062 1.633 11.435.073-3.271.024-8.035-.614-12.263a9.464 9.464 0 0 1-1.019.828m2.337-5.864c-.035-.083-.464-1.09-.868-2.338l-.207 2.308c.277.82.511 1.706.711 2.632.386-.762.588-1.644.364-2.602m-.17-10.135l-.507 5.657c.102.486.24.994.39 1.483a12.03 12.03 0 0 1 .633-3.503c.823-2.41 2.816-5.46 7.534-7.375h-3.637c-.51 2.105-3.276 3.32-4.413 3.738m104.386-3.738h-3.632c6.802 2.76 8.044 7.94 8.147 10.93.155-.503.3-1.03.405-1.534l-.507-5.658c-1.137-.417-3.9-1.633-4.413-3.738m5.318 13.843l-.207-2.308a27.29 27.29 0 0 1-.847 2.276c-.229.974-.032 1.867.35 2.638.198-.916.43-1.794.704-2.606m.244 5.063c-.638 4.222-.688 8.982-.615 12.264.391-4.372.934-8.962 1.633-11.433a9.556 9.556 0 0 1-1.018-.831" />
          </g>
        </g>
        <path fill="white" d="M 138.09489,770.01387 c -5.41759,-2.23136 -8.717,-5.73522 -9.98513,-10.60391 -0.57698,-2.21518 -0.56446,-4.69651 0.0323,-6.40696 0.52539,-1.50576 0.39351,-3.11036 -0.3783,-4.6029 -0.4211,-0.8143 -0.437,-1.29942 -0.12654,-3.86094 0.513,-4.23274 0.513,-297.58319 0,-301.81593 -0.31046,-2.56154 -0.29456,-3.04664 0.12654,-3.86096 0.77181,-1.49252 0.90369,-3.09711 0.3783,-4.60289 -0.96806,-2.7745 -0.27224,-7.19047 1.63173,-10.35559 1.49482,-2.48497 3.81438,-4.47745 7.03811,-6.04571 l 2.76375,-1.34448 60.27227,0.0774 60.27228,0.0774 2.40561,1.18843 c 4.25798,2.10354 7.62095,6.08379 8.55179,10.12149 0.43827,1.90109 0.38128,4.70092 -0.12999,6.38611 -0.47302,1.55912 -0.23045,3.62007 0.57162,4.85658 0.32016,0.49358 0.31731,1.11357 -0.0159,3.45807 -0.57117,4.01919 -0.57732,297.946 -0.006,301.90434 0.33618,2.33047 0.31862,2.67236 -0.19901,3.87535 -0.45648,1.06091 -0.5286,1.70898 -0.36804,3.30772 0.48184,4.79805 0.49978,5.49153 0.1817,7.02372 -0.93404,4.49922 -3.95549,8.19553 -8.56317,10.47581 l -2.68361,1.32808 -60.01266,0.0692 -60.01267,0.0692 -1.74474,-0.71862 z" />
        {
          skills.map((value, index) => (
              <Skill
                transformY={18 * index}
                name={value.name}
                attribute={value.attribute}
                isProficient={this.props.skillModifiers[value.name].proficient}
                value={getSkillValue(value, this.props)}
              />
            )
          )
        }

        <text
          transform="matrix(1.33333 0 0 1.33333 186.711 768.121)"
          fontWeight={700}
          fontSize={6.5}
          fontFamily="Scala Sans Offc"
        >
          <tspan y={0} x="0 3.471 7.1824999 9.1324997 12.35 15.5675">
            SKILLS
          </tspan>
        </text>
        <rect
          onMouseLeave={this.onMouseLeave}
          onMouseOver={this.onMouseOver}
          onClick={this.props.showEditor}
          fill="transparent"
          x="124"
          y="415"
          width="150"
          height="356" />
      </g>
    );
  }
}

const getSkillValue = (skill, {attributes, skillModifiers, proficiencyBonus}) =>
  parseInt(attributes[skill.attribute].modifier) + parseInt(skillModifiers[skill.name].bonus) +
  (skillModifiers[skill.name].proficient ? parseInt(proficiencyBonus) : 0);

const mapStateToProps = (state) => {
  const attributes = mapAttributesFromStateToProps(state);

  const skillModifiers = skills.reduce((result, val) => {
    const copy = {...result};
    copy[val.name] = {};
    copy[val.name].bonus = getValue(state, 'skills', `${val.name}OtherBonus`) || 0;
    copy[val.name].proficient = getValue(state, 'skills', `${val.name}Proficient`) || 0;
    return copy;
  }, {});

  return {
    attributes: attributes.values,
    skillModifiers,
    proficiencyBonus: state.homePageReducer.classesReducer.proficiencyBonus
  }
};

const mapDispatchToProps = (dispatch) => ({
  showEditor: () => dispatch(setDrawerRoute(SkillsDrawerRoute))
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillsContainer);
