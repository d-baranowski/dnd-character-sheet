import React from 'react';
import {connect} from 'react-redux';
import {addAttack, openModal} from './state/attacksActions';
import style from './Attacks.css';
import {getValue} from "../attributes/state/attributesReducer";


const getAttackBonus = (
  attributeModifiers,
  attack,
  proficiencyBonus
) => parseInt(attributeModifiers[attack.attribute]) + (attack.proficient ? proficiencyBonus : 0) + parseInt(attack.otherBonus || "0") || 0;

const prependSign = (value) => value >= 0 ? "+" + value : "-" + value;

const Attacks = ({addAttack, attacks, attributeModifiers, proficiencyBonus, openModal}) => (
  <g transform="translate(250, 0)">
    <path
      d="m 299.48421,813.76247 c -2.77231,-1.5965 -5.65949,-4.22404 -7.72605,-7.03127 -2.02198,-2.74667 -2.10831,-3.58351 -1.04467,-10.12631 0.59329,-3.64955 0.66768,-16.88793 0.79284,-141.09859 l 0.13811,-137.07116 1.1536,-1.67358 c 1.67229,-2.42606 5.39755,-5.81393 7.38472,-6.7159 1.68508,-0.76485 3.74568,-0.77975 107.84051,-0.77975 103.80884,0 106.15977,0.0169 107.82698,0.77369 1.9985,0.9072 5.21228,3.81016 7.16876,6.47542 l 1.38311,1.88417 0.13809,137.29051 c 0.12515,124.41415 0.19951,137.66824 0.79283,141.31793 1.03483,6.36546 0.96774,6.98992 -1.04465,9.72357 -2.08456,2.83166 -4.88828,5.36663 -7.74046,6.99848 l -2.09735,1.19999 -106.47633,-0.004 -106.47633,-0.004 z"
      fill="#fff"
    />
    <path
      d="m 531.33067,788.85944 -0.0227,-0.62666 -0.624,-0.04 c -0.0253,-0.001 -2.08533,-0.21867 -2.68533,-5.34665 V 512.70536 l -0.58533,-0.18267 c -1.488,-0.46666 -5.34932,-2.16533 -5.34932,-4.43065 v -0.83333 H 293.9366 v 0.83333 c 0,2.26532 -3.86266,3.96532 -5.35199,4.43065 l -0.58533,0.18267 v 270.1421 c -0.59867,5.12665 -2.65733,5.34399 -2.66533,5.34532 h -0.66666 v 0.66666 c 0,6.19332 1.41733,11.07998 3.33199,14.8613 v 7.51598 l 0.58533,0.18133 c 1.48933,0.46267 5.35199,2.15867 5.35199,4.43066 v 0.83333 h 228.12743 v -0.83333 c 0,-2.26666 3.86132,-3.96532 5.34932,-4.43066 l 0.58533,-0.18266 v -7.51465 c 1.91466,-3.77999 3.33199,-8.66798 3.33199,-14.8613 m -2.94399,-0.72399 c 0.57466,0.74399 1.168,1.08933 1.60666,1.25066 -0.0587,4.32932 -0.84533,7.96931 -1.99466,11.01064 v -12.8453 c 0.12267,0.20666 0.24933,0.40533 0.388,0.584 M 289.66594,521.64934 c 0.21867,-0.456 0.59467,-1.20667 1.12533,-2.13333 v 262.70878 c 0,4.52399 -0.38266,9.65331 -1.12533,15.28797 V 521.64934 m 0,280.53274 c 1.18933,-7.49865 1.792,-14.2013 1.792,-19.95729 V 518.39601 c 2.20666,-3.55999 6.13465,-8.51198 11.31064,-9.47064 h 210.45947 c 5.17332,0.95866 9.10398,5.91598 11.31197,9.47597 v 263.82345 c 0,5.75599 0.60267,12.45864 1.792,19.95862 v 1.82266 c -1.15154,2.08935 -2.58199,4.01232 -4.25199,5.71599 -3.12533,3.17199 -6.28132,4.76665 -7.46265,5.29332 H 301.38191 c -1.73466,-0.77867 -7.74131,-3.88932 -11.71597,-11.02797 v -1.80533 m 236.66608,-4.66932 c -0.74267,-5.63466 -1.12533,-10.76398 -1.12533,-15.28797 V 519.51867 c 0.53066,0.92667 0.90666,1.67733 1.12533,2.13333 v 275.86076 m 0,-283.6034 v 4.85865 c -1.69466,-2.97333 -4.82932,-7.51065 -9.18265,-9.84264 h 3.34266 c 0.644,2.78132 4.37066,4.43332 5.83999,4.98399 m -230.82343,-4.98399 h 3.34 c -4.35333,2.33199 -7.48932,6.86931 -9.18265,9.84264 v -4.85865 c 1.47067,-0.55067 5.19866,-2.20267 5.84265,-4.98399 m -9.50397,280.46074 c 0.43866,-0.16133 1.032,-0.50667 1.60666,-1.25066 0.13733,-0.17867 0.26533,-0.37734 0.388,-0.584 v 12.85197 c -1.168,-3.07333 -1.93733,-6.71732 -1.99466,-11.01731 m 3.66132,20.64528 v -3.45599 c 0.9799,1.4822 2.10163,2.8656 3.34933,4.13066 1.64123,1.66216 3.48609,3.11009 5.49065,4.30932 h -2.99733 c -0.64399,-2.78133 -4.37198,-4.43332 -5.84265,-4.98399 m 230.82609,4.98399 h -2.99999 c 3.54267,-2.11432 6.564,-4.99894 8.83998,-8.43998 v 3.45599 c -1.46933,0.55067 -5.19599,2.20266 -5.83999,4.98399"/>
    <text
      transform="matrix(1.33333 0 0 1.33333 358.945 768.121)"
      fontWeight={700}
      fontSize={6.5}
      fontFamily="Scala Sans Offc"
    >
      <tspan
        y={30}
        x="22"
      >
        ATTACKS
      </tspan>
    </text>
    <text
      transform="matrix(1.33333 0 0 1.33333 298.04 519.077)"
      fontWeight={400}
      fontSize={5.75}
      fontFamily="Scala Sans Offc"
      fill="#969797"
    >
      <tspan y={0} x="0 4.3642502 7.7855 12.834">
        NAME
      </tspan>
    </text>
    <text
      transform="matrix(1.33333 0 0 1.33333 388.286 519.077)"
      fontWeight={400}
      fontSize={5.75}
      fontFamily="Scala Sans Offc"
      fill="#969797"
    >
      <tspan
        y={0}
        x="0"
      >
        BONUS
      </tspan>
    </text>
    <text
      transform="matrix(1.33333 0 0 1.33333 436.002 519.077)"
      fontWeight={400}
      fontSize={5.75}
      fontFamily="Scala Sans Offc"
      fill="#969797"
    >
      <tspan
        y={0}
        x="0 4.0882502 7.5095 12.558 15.9505 20.0215 23.12075 25.4725 28.571751 31.734249 34.931252"
      >
        DAMAGE/TYPE
      </tspan>
    </text>
    <foreignObject
      x={297}
      y={522}
      width={300}
    >
      <svg x={400} y={760}>
        {
          Object.entries(attacks).map((value, index) => (
            <text
              className={style.textElement}
              onClick={() => { openModal(value[0]) }}
              key={value[0]}
              fontSize={11}
              fontFamily="Scala Sans Offc"
            >
              <tspan y={(index + 1) * 12} x="0">{value[1].name}</tspan>
              <tspan y={(index + 1) * 12} x={90}>{prependSign(getAttackBonus(attributeModifiers, value[1], proficiencyBonus))}</tspan>
              <tspan y={(index + 1) * 12} x={138}>{
                value[1].damageDice} {prependSign(parseInt((attributeModifiers[value[1].attribute] || 0)) + (parseInt(value[1].otherBonus || "0")))} / {value[1].damageType
              }</tspan>
            </text>
          ))
        }

      </svg>
    </foreignObject>
    <svg
      x={400}
      y={760}
      width={25}
      height={25}
      onClick={addAttack}
    >
      <use xlinkHref="#icon-add" />
    </svg>
  </g>
);

const mapStateToProps = (state) => {
  const {attacks} = state.homePageReducer.attacksReducer;
  return {
    attacks,
    attributeModifiers: {
      Dexterity: getValue(state, `DexterityModifier`) || 0,
      Strength: getValue(state, `StrengthModifier`) || 0
    },
    proficiencyBonus: state.homePageReducer.classesReducer.proficiencyBonus
  };
};

const mapDispatchToProps = (dispatch) => ({
  addAttack: () => dispatch(addAttack()),
  openModal: (id) => dispatch(openModal(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Attacks);
