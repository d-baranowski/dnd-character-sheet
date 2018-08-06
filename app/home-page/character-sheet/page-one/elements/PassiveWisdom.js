import React from 'react';
import {connect} from 'react-redux';
import getValue from '../../../../form/getValue';
import createSimpleForm from '../../../../form/createSimpleForm';
import {setDrawerRoute} from '../../../menu-drawer/state/menuDrawerActions';

const PassiveWisdomDrawerRoute = "PassivePerception";
createSimpleForm("perceptionBonus", "Other Bonus", "perceptionBonus", PassiveWisdomDrawerRoute);

class PassiveWisdom extends React.PureComponent {
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
    const {wisdomModifier, otherBonus} = this.props;
    const {isHovered} = this.state;

    return (
      <g>
        <g filter={ isHovered && "url(#sofGlow)" }>
          <g transform="matrix(1.33333 0 0 -1.33333 0 1056)">
            <path id="PassiveWisdomBorder" d="M34.142 205.966A16.086 16.086 0 0 1 27 192.59c0-5.376 2.67-10.377 7.144-13.377l.252-.17h17.407l.252.17a16.12 16.12 0 0 1 2.566 2.145h147.144l.2.336c.574.964 2.385 3.618 3.848 4.305l.395.186-.002 12.81-.394.186c-1.463.687-3.274 3.342-3.85 4.306l-.2.335H54.623a16.217 16.217 0 0 1-2.566 2.145l-.252.17h-17.41zM29 192.59a14.09 14.09 0 0 0 6.009 11.547h8.076c3.716-1.642 8.747-2.564 11.215-3.023a14.04 14.04 0 0 0 2.899-8.52v-.007c0-3.13-1.055-6.1-2.9-8.52-2.468-.46-7.5-1.382-11.214-3.024H35.01A14.091 14.091 0 0 0 29 192.59m165.658 9.857c2.4-.892 8.702-3.556 10.173-7.384l.002-4.943c-1.471-3.828-7.775-6.495-10.175-7.387H63.833c-.624.558-1.975 1.427-4.49 1.656.726 1.226 2.329 4.371 2.329 8.201s-1.603 6.975-2.328 8.201c2.514.23 3.865 1.098 4.489 1.656zm-136.165-1.705c.494-.783 2.429-4.118 2.429-8.152 0-4.034-1.935-7.369-2.43-8.152-.474.013-.985.004-1.534-.032a16.068 16.068 0 0 1 2.24 8.184v.003c0 2.926-.796 5.738-2.24 8.181a16.52 16.52 0 0 1 1.535-.032m-7.304-19.699h-4.176c2.518 1.024 4.68 1.69 6.529 2.094a14.14 14.14 0 0 0-2.353-2.094m5.257 2.553c3.092.28 4.975-.295 6.037-.863h-6.661c.217.281.424.57.624.863m144.546-.863h-4.298c2.59 1.114 6.328 3.087 8.139 5.782v-1.485c-1.66-1.017-3.276-3.408-3.841-4.297m3.839 15.418v-1.484c-1.811 2.695-5.546 4.666-8.137 5.78h4.296c.565-.889 2.183-3.28 3.84-4.296m-142.347 4.296c-1.062-.568-2.945-1.143-6.037-.863-.2.294-.406.582-.623.863zm-8.94-.404c-1.85.404-4.011 1.07-6.53 2.094h4.177a14.1 14.1 0 0 0 2.353-2.094" />
          </g>
        </g>
        <path
          id="PassiveWisdomFill"
          fill="white"
          d="M 46.160103,814.1574 c -3.229722,-2.44151 -5.565537,-5.85159 -6.701792,-9.78401 -0.556449,-1.9258 -0.670602,-2.8066 -0.67092,-5.17686 -2.47e-4,-1.84611 0.03692,-2.36569 0.242987,-3.3972 0.572702,-2.86674 1.704387,-5.47567 3.33387,-7.68574 0.800323,-1.08547 2.545141,-2.8809 3.546638,-3.64951 l 0.751536,-0.57677 h 5.417906 5.417906 l 0.863436,0.36415 c 2.364702,0.9973 7.004869,2.27048 11.462538,3.14511 1.227927,0.24093 2.315755,0.46194 2.417394,0.49113 0.280197,0.0805 1.494069,1.97563 2.141291,3.34309 2.054082,4.33987 2.379687,9.27099 0.906811,13.73317 -0.577869,1.7507 -2.294007,5.00677 -2.883279,5.47052 -0.07535,0.0593 -1.28425,0.33545 -2.686453,0.61368 -4.543453,0.90153 -8.696684,2.04669 -11.368685,3.13468 l -1.054143,0.42923 -5.271542,-0.003 -5.271542,-0.003 z
             M 70.462092,786.3623 c -1.687593,-0.41174 -5.639533,-1.70768 -6.864949,-2.25119 l -0.47072,-0.20878 2.571151,-0.008 2.571151,-0.008 0.777741,0.62215 c 0.427758,0.34218 1.088711,0.91415 1.468783,1.27106 0.608968,0.57184 0.659475,0.648 0.425257,0.64129 -0.146182,-0.004 -0.361468,-0.031 -0.478414,-0.0595 z
             M 63.073266,814.51407 c 0.274346,-0.15746 3.616544,-1.3526 4.730975,-1.69175 1.145786,-0.34869 3.112461,-0.8681 3.286937,-0.8681 0.175778,0 -0.878812,1.02466 -1.923825,1.86922 l -0.975797,0.78863 -2.63888,-0.003 c -1.529465,-0.002 -2.571837,-0.0417 -2.47941,-0.0948 z
             M 76.633613,808.95084 c 3.065155,-6.00719 3.104992,-13.17404 0.106984,-19.24666 l -0.671088,-1.35932 0.97044,0.0304 0.970441,0.0304 0.805151,1.59471 c 0.89901,1.78061 1.652872,3.92844 2.016346,5.74478 0.327851,1.63833 0.400383,4.2553 0.163432,5.8966 -0.378282,2.62027 -1.371188,5.52863 -2.613879,7.65641 l -0.433586,0.7424 H 77.01272 76.077587 Z
             M 75.742037,787.19365 c -0.395376,-0.0547 -0.514134,-0.13566 -0.83412,-0.56875 l -0.373106,-0.505 4.236169,0.009 4.23617,0.009 -0.532539,0.24378 c -1.496186,0.6849 -4.785441,1.08188 -6.732574,0.81255 z
             M 74.612134,812.24437 c 0,-0.0275 0.14979,-0.26255 0.332866,-0.52229 l 0.332865,-0.47224 1.107128,-0.0755 c 1.989271,-0.13559 4.825774,0.27147 6.200695,0.88985 l 0.478413,0.21517 -4.225983,0.008 c -2.324291,0.004 -4.225984,-0.015 -4.225984,-0.0425 z
             M 84.442389,811.7957 c -1.128674,-0.77028 -2.996503,-1.42593 -4.569111,-1.60385 -0.356691,-0.0403 -0.634252,-0.10286 -0.616801,-0.13891 0.01745,-0.036 0.258526,-0.50713 0.535721,-1.04686 1.825911,-3.55526 2.693839,-7.54128 2.419943,-11.11378 -0.229765,-2.99688 -1.222699,-6.36288 -2.616048,-8.86829 -0.201085,-0.36157 -0.329163,-0.67822 -0.284615,-0.70366 0.04455,-0.0254 0.384671,-0.0794 0.755832,-0.11982 1.454954,-0.15861 3.529091,-0.93143 4.59009,-1.71028 l 0.504518,-0.37035 h 87.195852 87.19586 l 1.3495,0.5448 c 2.04065,0.82382 5.20564,2.46549 6.76337,3.50814 2.3731,1.58842 3.89454,3.05796 4.88199,4.71549 l 0.44186,0.74171 0.0307,3.4882 0.0307,3.48819 -0.32462,0.60738 c -1.63234,3.05419 -6.00234,6.19806 -11.98277,8.62065 l -1.08299,0.4387 -87.26399,-0.003 -87.263989,-0.003 z
             M 272.66322,793.09726 c -1.61824,-2.14975 -5.14266,-4.67521 -8.98799,-6.44041 l -1.1163,-0.51244 2.71101,0.002 2.71101,0.002 0.66265,0.9795 c 1.24648,1.84248 2.82492,3.5714 4.09981,4.49067 0.28794,0.20762 0.29628,0.24074 0.26578,1.05511 l -0.0315,0.84077 z
             M 264.32856,811.43381 c 2.10781,-1.0433 3.6885,-1.98374 5.10048,-3.03457 1.06437,-0.79213 2.641,-2.27526 3.26182,-3.06839 l 0.33287,-0.42525 0.004,0.85051 0.004,0.85051 -0.68729,0.50869 c -1.08002,0.79937 -3.00218,3.02529 -4.06451,4.70685 l -0.29811,0.47188 -2.69556,1.9e-4 -2.69556,1.9e-4 z"
        />
        <text
          transform="matrix(1.33333 0 0 1.33333 117.964 802.028)"
          fontWeight={400}
          fontSize={5.75}
          fontFamily="Scala Sans Offc"
        >
          <tspan
            y={0}
            x="0 3.1394999 6.56075 9.6312504 12.70175 14.42675 17.778999 20.87825 22.14325 27.11125 28.83625 31.90675 35.994999 40.382252 45.430752 46.868252 48.955502 52.1525 55.251751 58.581001 62.05975 65.158997 68.356003 71.455254 73.180252 77.567497 81.931747"
          >
            PASSIVE WISDOM (PERCEPTION)
          </tspan>
        </text>
        <foreignObject x="41" y="788">
          <div>
            <p style={{height: '32px', width: '32px', border: 'none', fontFamily: 'Scala Sans Offc', fontSize: 'medium', textAlign: 'center' }}>{(10 + wisdomModifier || 0) + otherBonus}</p>
          </div>
        </foreignObject>
        <rect
          x={37}
          y={782}
          width={236}
          height={36}
          fill="transparent"
          onMouseLeave={this.onMouseLeave}
          onMouseOver={this.onMouseOver}
          onClick={this.props.showEditor}
        />
      </g>
    );
  }
}

const mapStateToProps = (state) => ({
  wisdomModifier: parseInt(getValue(state, 'attributes', 'WisdomModifier') || 0),
  otherBonus: parseInt(getValue(state, 'perceptionBonus', 'perceptionBonus') || 0)
});

const mapDispatchToProps = (dispatch) => ({
  showEditor: () => dispatch(setDrawerRoute(PassiveWisdomDrawerRoute))
});

export default connect(mapStateToProps, mapDispatchToProps)(PassiveWisdom);
