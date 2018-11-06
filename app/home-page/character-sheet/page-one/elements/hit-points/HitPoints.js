import React from 'react'
import {connect} from 'react-redux';
import {setDrawerRoute} from '../../../../menu-drawer/state/menuDrawerActions';
import getValue from '../../../../../form/getValue';
import {HitPointsDrawerRoute} from './HitPointsDrawer';


class HitPoints extends React.PureComponent {
  state = {
    isHovered: false
  };

  onMouseOver = () => {
    this.setState({isHovered: true})
  };

  onMouseLeave = () => {
    this.setState({isHovered: false})
  };

  getBarWidth =  (maxHp, currentHp) => Math.max(Math.min((currentHp / maxHp) * 99, 99), 0);

  render() {
    const {isHovered} = this.state;
    const {currentHp} = this.props;
    const maxHp = this.props.tempMapHp ? this.props.tempMapHp : this.props.maxHp;

    return (
      <g>
        <g filter={ isHovered && "url(#sofGlow)" }>
          <g transform="matrix(1.33333 0 0 -1.33333 0 1056)">
            <path id="currentHitPointsFill"
                  d="M383.519 598.606H228.483c0-2.538-4.453-3.92-4.453-3.92V537.77h2.579s2.111 3.95 8.906 0h140.97c6.795 3.95 8.906 0 8.906 0h2.579v56.917s-4.451 1.382-4.451 3.92"
                  fill="#fff"
            />
            <path id="currentHitPointsBorder"
                  d="M388.119 595.164c-1.141.354-4.1 1.662-4.1 3.442v.5H227.983v-.5c0-1.775-2.961-3.087-4.101-3.442l-.352-.11V537.27l3.375.004.144.257c.029.056.702 1.205 2.484 1.444a.91.91 0 0 1 .726-.378.91.91 0 0 1 .71.355c1.268-.162 2.703-.688 4.296-1.614l.116-.068H376.62l.116.068c1.593.926 3.028 1.452 4.295 1.614a.909.909 0 0 1 .71-.355c.302 0 .558.155.727.378 1.782-.24 2.454-1.388 2.482-1.44l.142-.265h3.379v57.786zm-1.617-5.13a24.04 24.04 0 0 0 .969-1.863v-37.61c-.644 4.612-.97 8.777-.97 12.426zm-3.435 8.072c.41-2.14 3.366-3.397 4.404-3.776v-3.951c-1.267 2.27-3.75 5.964-7.248 7.727zm-154.131 0h2.84c-3.497-1.763-5.98-5.457-7.246-7.727v3.95c1.037.38 3.995 1.638 4.406 3.777m-4.406-9.935c.108.236.436.934.969 1.866v-27.05c0-3.65-.325-7.814-.97-12.425zm161.13-49.902c-.36.489-1.314 1.492-3.133 1.709a.912.912 0 0 1-.786.467.916.916 0 0 1-.807-.498c-1.378-.172-2.91-.72-4.583-1.678H235.649c-1.673.958-3.204 1.506-4.583 1.678a.915.915 0 0 1-.807.498.91.91 0 0 1-.785-.467c-1.82-.217-2.774-1.22-3.133-1.71h-1.811v8.997c.972 5.928 1.469 11.216 1.469 15.722v27.89c1.84 2.967 5.273 7.229 9.813 7.229h140.376c4.537 0 7.973-4.265 9.814-7.232v-27.887c0-4.506.497-9.794 1.469-15.722v-8.996z"/>
          </g>
        </g>
        <g>
          <text
            transform="matrix(1.33333 0 0 1.33333 306.347 276.153)"
            fontWeight={400}
            fontSize={7}
            fontFamily="Scala Sans Offc"
            fill="#969797"
          >
            <tspan
              y={0}
              x="0"
            >
              Max HP: {maxHp}
            </tspan>
          </text>
          <text
            transform="matrix(1.33333 0 0 1.33333 365.226 333.84)"
            fontWeight={700}
            fontSize={6.5}
            fontFamily="Scala Sans Offc"
          >
            <tspan
              y={0}
              x="15"
            >
              HIT POINTS
            </tspan>
          </text>
        </g>
        <foreignObject x="300" y="280">
          <div>
            <p style={{
              height: '30px',
              width: '218px',
              fontFamily: 'Scala Sans Offc',
              fontSize: 'x-large',
              textAlign: 'center' }}>
              {currentHp}
            </p>
          </div>
        </foreignObject>

        <path d="M 359 315 h 100 v 3 h -100 Z" fill="transparent" stroke="black" />
        <path d={`M 359.5 316.5 h ${this.getBarWidth(maxHp, currentHp)}`} stroke="red" strokeWidth={2} />
        <rect
          onMouseLeave={this.onMouseLeave}
          onMouseOver={this.onMouseOver}
          onClick={this.props.showEditor}
          x={300}
          y={258}
          fill="transparent"
          width={218}
          height={80}
        />
        <svg
          x={470}
          y={284}
          width={30}
          height={25}
          onClick={() => this.props.setHp(parseInt(currentHp) + 1)}
        >
          <use xlinkHref="#si-glyph-plus"/>
        </svg>
        <svg
          x={315}
          y={284}
          width={30}
          height={25}
          onClick={() => this.props.setHp(parseInt(currentHp) - 1)}
        >
          <use xlinkHref="#si-glyph-minus"/>
        </svg>
      </g>
    );
  }
}

const mapStateToProps = (state) => ({
  maxHp: getValue(state, 'hitPoints', "maxHp") || 0,
  tempMapHp: getValue(state, 'hitPoints', "tempMaxHp") || 0,
  currentHp: getValue(state, "hitPoints", "currentHp") || 0
});
const mapDispatchToProps = (dispatch) => ({
  showEditor: () => dispatch(setDrawerRoute(HitPointsDrawerRoute)),
  setHp: (hp) => dispatch({
    'type': '@@redux-form/CHANGE',
    'meta': {
      'form': 'hitPoints',
      'field': 'currentHp',
      'touch': false,
      'persistentSubmitErrors': false
    },
    'payload': hp
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(HitPoints);
