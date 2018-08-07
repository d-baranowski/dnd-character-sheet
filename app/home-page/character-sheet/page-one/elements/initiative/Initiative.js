import React from 'react';
import {connect} from 'react-redux';
import createSimpleForm from '../../../../../form/createSimpleForm';
import {setDrawerRoute} from '../../../../menu-drawer/state/menuDrawerActions';
import getValue from '../../../../../form/getValue';
import {modifierWithSign} from '../attributes/AttributeBox';


const InitiativeDrawerRoute = "Initiative";
createSimpleForm("initiativeBonus", "Initiative Bonus", "initiativeBonus", InitiativeDrawerRoute);

class Initiative extends React.PureComponent {
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
    const {isHovered} = this.state;
    const {initiativeBonus, dexterity} = this.props;
    const value = modifierWithSign(parseInt(initiativeBonus)+ parseInt(dexterity));
    return (
      <g>
        <g filter={ isHovered && "url(#sofGlow)" }>
          <path id="InitiativeFill" d="M438.967 187.364v52.09l-5.6 5.6h-56.371l-5.613-5.6v-52.09l5.613-5.613h56.37z"  fill="#fff" />
          <g transform="matrix(1.33333 0 0 -1.33333 0 1056)">
            <path id="InitiativeBorder" d="M324.844 656.487H282.63l-5.012-5.013V612.22l5.012-5.012h42.215l5.013 5.012v39.253zm3.638-5.583v-3.875c-.408 1.222-.987 2.525-1.799 3.756v.07h-.046c-1.155 1.728-2.782 3.295-5.07 4.257h2.707zm-8.852-42.32h-31.812c-2.614.632-4.706 2.072-6.278 4.279v37.947c1.367 1.915 3.37 3.579 6.303 4.302h31.812c2.614-.632 4.706-2.071 6.278-4.278v-37.948c-1.366-1.915-3.37-3.58-6.303-4.302m-40.638 36.174c.302 1.417.842 3.18 1.798 4.873V614.05c-.167.297-.343.579-.495.899-.657 1.384-1.057 2.775-1.303 3.939zm47.691 4.888c.167-.297.344-.58.495-.898.657-1.385 1.058-2.776 1.304-3.94v-25.87c-.303-1.417-.843-3.181-1.799-4.872zm-43.483 5.466h2.707c-2.289-.962-3.915-2.53-5.07-4.256h-.047v-.071c-.812-1.231-1.39-2.534-1.798-3.756v3.875zm-4.208-42.321v3.876c.407-1.221.986-2.525 1.798-3.755v-.072h.046c1.156-1.726 2.782-3.294 5.071-4.256H283.2zm45.282-4.207h-2.707c2.288.962 3.915 2.53 5.07 4.256h.046v.072c.812 1.23 1.391 2.534 1.8 3.755v-3.876z" />
          </g>
        </g>
        <text
          transform="matrix(1.33333 0 0 1.33333 384.599 240.768)"
          fontWeight={700}
          fontSize={6.5}
          fontFamily="Scala Sans Offc"
        >
          <tspan
            y={0}
            x="0 1.95 6.8835001 8.8334999 12.337 14.287 17.8295 21.333 23.283001 27.0725"
          >
            INITIATIVE
          </tspan>
        </text>
        <foreignObject x="375" y="190">
          <div>
            <p style={{
              height: '30px',
              width: '60px',
              border: 'none',
              fontFamily: 'Scala Sans Offc',
              fontSize: 'x-large',
              textAlign: 'center' }}>
              {value}
            </p>
          </div>
        </foreignObject>
        <rect
          fill="transparent"
          x="370"
          y="180"
          width="70"
          height="70"
          onMouseLeave={this.onMouseLeave}
          onMouseOver={this.onMouseOver}
          onClick={this.props.showEditor}
        />
      </g>
    );
  }
}

const mapStateToProps = (state) => ({
  dexterity: getValue(state, 'attributes', "DexterityModifier") || 0,
  initiativeBonus: getValue(state, "initiativeBonus", "initiativeBonus") || 0
});
const mapDispatchToProps = (dispatch) => ({
  showEditor: () => dispatch(setDrawerRoute(InitiativeDrawerRoute))
});


export default connect(mapStateToProps, mapDispatchToProps)(Initiative);
