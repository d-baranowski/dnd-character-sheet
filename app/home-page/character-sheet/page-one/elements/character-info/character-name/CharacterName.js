import React from 'react';
import {connect} from 'react-redux';
import './CharacterNameDrawer';
import {CharacterNameDrawerRoute} from './CharacterNameDrawer';
import {setDrawerRoute} from '../../../../../menu-drawer/state/menuDrawerActions';
import getValue from '../../../../../../form/getValue';



class CharacterName extends React.Component {
  state = {
    isHovered: false
  };

  onMouseOver = () => {
    this.setState({isHovered: true})
  };

  onMouseLeave = () => {
    this.setState({isHovered: false})
  };

  onClick = () => {
    this.props.showNameEditor();
  };

  render() {
    return (
      <g>
        <Presentation isHovered={this.state.isHovered} characterName={this.props.characterName} />
        <rect
          onMouseLeave={this.onMouseLeave}
          onMouseOver={this.onMouseOver}
          onClick={this.onClick}
          fill="transparent" x="40" y="70" width="310" height="50" />
      </g>
    );
  }
}


const Presentation = ({isHovered, characterName}) => (
  <g>
    <g  filter={ isHovered && "url(#sofGlow)" }>
      <path id="top-banner-nav-start-piece"
            d="M40.543 82.094v50l47.334-6.186v-50z"
            fill="none"
            stroke="#000"
            strokeWidth={1.83332875}
            strokeMiterlimit={10}
      />
      <path id="top-banner-nav-start-piece-border"
            d="M40.543 82.094v50l47.334-6.186v-50z M41.578 128.381l46.3-6.566m-46.3-36.376l46.3-5.89"
            fill="none"
            stroke="#000"
            strokeWidth={0.9999974999999999}
            strokeMiterlimit={10}
      />
      <path id="top-banner-nav-start-shadow-piece" d="M87.877 75.909L55.585 71.13v50l32.292 4.778z" fill="#c3c4c6"/>
      <path id="top-banner-nav-start-shadow-border"
            d="M87.877 75.909L55.585 71.13v50l32.292 4.778z"
            fill="none"
            stroke="#000"
            strokeWidth={1.83332875}
            strokeMiterlimit={10}
      />


      <g clipPath="url(#d)" transform="matrix(1.33333 0 0 -1.33333 0 1056)">
        <path id="dragon-neck"
              d="
                m 87.06 771.19 c -0.43 -2.8 0.22 -6.34 0.22 -6.34 s -2.05 1.5 -4.29 2.77 c -1.33 0.75 -2.46 2.42 -3.16 3.65 c -0.48 0.85 -0.76 1.48 -0.76 1.48 c -3.11 -3.34 -1.1 -7.27 -1.1 -7.27 c -4.85 1.06 -7.88 -0.19 -7.88 -0.19 c 9.18 -6.01 4.3 -6.5 -1 -9.01 c -5.29 -2.51 -5.68 -5.63 -5.68 -5.63 c 6.33 2.08 8.85 -0.58 8.85 -0.58 c -3.41 -3.26 -0.37 -8.35 -0.37 -8.35 c 3.31 10.34 -6.51 -9.04 18.85 -10.15 c 7.27 -1.11 13.7 -0.67 13.7 -0.67 l -16.72 -5.2 l -15.02 -3.79 s -14.91 1.6 -20.39 14.22 c -5.47 12.63 4.09 22.57 3.13 23.22 c -0.91 0.62 -2.07 -0.76 -2.19 -0.91 c 4.16 11.91 16.69 11.78 17.19 13.04 c 0.51 1.27 -2.47 1.35 -2.47 1.35 c 12.67 4.17 19.09 -1.64 19.09 -1.64
              "/>
        <path id="top-banner-nav-start-main-bit-CHARACTER-NAME"
              d="M260.728 701.151c-61.753-11.25-157.286 11.25-219.04 0v37.5c61.754 11.25 157.287-11.25 219.04 0z"
              fill="#fff"
        />
        <path id="top-banner-nav-start-main-bit-border"
              d="M260.728 701.151c-61.753-11.25-157.286 11.25-219.04 0v37.5c61.754 11.25 157.287-11.25 219.04 0z"
              fill="none"
              stroke="#000"
              strokeWidth={1.375}
              strokeMiterlimit={10}
        />
        <path id="character-name-borders"
              d="M261.606 704.774s-20.5-8.666-114.666-.333c-66.51 5.886-99.718.727-104.856-.173m218.644 31.461s-19.872-8.038-114.038.295c-66.51 5.886-99.718.726-104.856-.173"
              fill="none"
              stroke="#000"
              strokeWidth={0.75}
              strokeMiterlimit={10}
        />
        <path id="dragon-eye"
              d="M99.72 755.34c3.39-1.37 4.29-4.66 4.29-4.66-2.85.08-3.69 2.28-4.29 4.66"
              fill="#fff"
        />
        <path id="dragon-head-and-tail"
              d="M256.026 696.12c-.64 3.468-3.087 9.124-7.827 12.106-3.917 2.46-7.34 1.927-7.355 3.15-.03 1.553 4.362 1.072 4.362 1.072-4.735 2.712-11.527-.607-12.498.946-.573.931 3.16 2.238 3.16 2.238-5.775.212-12.591-2.765-15.325-5.466 6.89 2.313 16.593.983 21.05-2.825-1.887 1.06-3.933 1.768-6.033 2.188-7.82 1.572-16.523-.755-21.763-2.935-5.914-2.003-10.425-4.96-10.425-4.96-3.904-2.27-11.114-4.385-16.003-2.316l-.001-.01s7.654-12.749 17.059-8.314c.69.384 1.352.78 1.973 1.168 5.134 2.785 10.304 7.431 10.304 7.431 1.798 1.257 7.334 4.862 13.999 6.876 1.485.443 2.992.535 4.424.33 3.717-.506 6.957-2.889 8.02-5.738 2.87.5 10.145-1.904 12.879-4.94M104.01 750.68s-.9 3.29-4.29 4.66c.6-2.38 1.44-4.58 4.29-4.66m-10.92-8.8c-.79 4.26-6.67 4.99-9.7 3.03 1.05 2.82 4 5.38 6.28 6.19-1.3.5-2.83.93-4.48 1.29 1.94 1.48 6.71 2.6 9.13 2.39-.44.13-.92.23-1.44.3l.46 2.77c-.27 2.32-2.37 4.98-4.87 6.58-1.24 3.55-.03 10.01 1.68 11.73-.86-9.29 12.26-15.03 14.81-21.88-1.44 5.85-7.51 9.71-10.35 13.27-.9 2.34-.03 6.21 1.06 7.52-.5-6.23 6.08-11.31 9.57-14.91 4.12-4.23 5.21-7.9 4.54-10.85.92-.28 2.17-1.22 1.91-2.74 1.36.27 2.79 1.78 3.15 2.73.53-4.66-2.35-9.47-5.44-10.84 0 0 .89 2.18-.46 3.92-1.32 1.71-5.21 1.85-6.53 1.8 0 0 1.69 2.34 1.08 3.57-.74 1.53-8.38 1.1-11.83-.03 1.17.09 3.91-.3 4.85-.73-.56-.78-2.06-4.09-1.08-5.13.83-.89 2 .43 2.15.6-.11-.32-1.26-3.66-.47-4.5.82-.88 2.67-.33 2.67-.33-1.23-2.84-5.72-4.69-8.82-4.59 1.12.31 3.01 2.22 3.32 3.4-.83-.38-2.95-.55-3.76-.37 1.01.38 3.1 2.89 2.57 5.81"/>
        <path id="dragon-ear-finger"
              d="M76.73 759.34c.51 1.8-2.99 5.01-4.31 5.63 4.94.05 7.37-.95 7.37-.95-1.23 1.93-1.56 4.85-.75 7.13 2.49-6.53 12.08-7.87 14.3-13.3l-.46-2.77c-3.79.49-9.38-.64-12.2-3.77.98-.03 3.51-.58 4.49-.93-4.27-.64-10.15-4.4-11.91-6.21.52 2.44 1.27 4.49.74 5.98-.75 2.1-3.25 3.06-8.3 2.17 3.49 3.29 10.5 5.18 11.03 7.02M48.7 742.824l1.019-2.22c-1.369-.23-2.909-5.64-2.909-5.64-3.49 2.02-.55 8.48-.55 8.48z"/>
        <path id="dragon-fingers"
              d="M41.08 743.744s1.82 1.31 2.78 1.55l1.59-1.41-.82-.25s-1.53-5-.91-7.07l1-2.9s-3.26.65-3.76 1.9c0 0-1.05 5.63.12 8.18"/>
        <path id="dragon-left-finger"
              d="M39.24 741.624s.21-6.42.87-6.99l2.42-1.03.07-2.19s-4.32 1.37-4.68 3.02c-.36 1.65-.64 5.75-.64 5.75s.72 1.07 1.96 1.44"/>

      </g>
    </g>
    <text
      style={{ InkscapeFontSpecification: "ScalaSansOffc" }}
      transform="matrix(1.33333 0 0 1.33333 92.091 128.697)"
      fontWeight={400}
      fontSize={7}
      fontFamily="Scala Sans Offc"
    >
      <tspan
        y={0}
        x="0 4.2350001 9.632 13.797 17.885 22.014999 26.25 30.023001 33.796001 37.883999 39.633999 44.946999 49.112 55.257999"
      >
        CHARACTER NAME
      </tspan>
    </text>
    <text
      fontWeight={400}
      fontSize={18}
      fontFamily="Scala Sans Offc"
    >
      <tspan
        y={100}
        x={70}
      >
        {characterName}
      </tspan>
    </text>
  </g>
);

const mapStateToProps = (state) => {
  return {
    characterName: getValue(state, 'characterName', 'characterName')
  }
};

const mapDispatchToProps = (dispatch) => ({
  showNameEditor: () => dispatch(setDrawerRoute(CharacterNameDrawerRoute))
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterName);
