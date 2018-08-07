import React from 'react';
import createSimpleForm from '../../../../../form/createSimpleForm';
import {setDrawerRoute} from '../../../../menu-drawer/state/menuDrawerActions';
import getValue from '../../../../../form/getValue';
import {connect} from 'react-redux';

const PersonalityTraitsRoute = "personalityTraits";
createSimpleForm("personalityTraits", "Personality Traits", "personalityTraits", PersonalityTraitsRoute, "textarea");

class PersonalityTraits extends React.PureComponent {
  constructor() {
    super();
    this.scollMe = React.createRef();
  }

  state = {
    isHovered: false
  };

  onMouseOver = () => {
    this.setState({isHovered: true})
  };

  onMouseLeave = () => {
    this.setState({isHovered: false})
  };

  wheel = (e) => {
    this.scollMe.current.scrollTop = this.scollMe.current.scrollTop + e.deltaY ;
    e.stopPropagation();
  };

  render() {
    const {isHovered} = this.state;

    return (
      <g>
        <g filter={ isHovered && "url(#sofGlow)" }>
          <g transform="matrix(1.33333 0 0 -1.33333 0 1056)">
            <path id="PersonalityTraitsFill"
                  d="M572.519 655.987H417.483c0-2.538-4.453-3.92-4.453-3.92v-58.975h2.579s2.111 3.95 8.906 0h140.97c6.795 3.95 8.906 0 8.906 0h2.579v58.975s-4.451 1.382-4.451 3.92"
                  fill="#fff"
            />
          </g>
          <g transform="matrix(1.33333 0 0 -1.33333 0 1056)">
            <path id="PersonalityTraitsBorder" d="M577.119 652.544c-1.141.354-4.1 1.662-4.1 3.442v.5H416.983v-.5c0-1.775-2.961-3.087-4.101-3.442l-.352-.109v-59.844l3.375.004.144.257c.029.056.702 1.205 2.484 1.444a.91.91 0 0 1 .726-.377.91.91 0 0 1 .71.354c1.268-.162 2.703-.687 4.296-1.614l.116-.068H565.62l.116.068c1.593.927 3.028 1.452 4.295 1.614a.908.908 0 0 1 .71-.354.91.91 0 0 1 .727.377c1.782-.239 2.454-1.388 2.482-1.44l.142-.265h3.379v59.844zm-1.617-5.129a24.04 24.04 0 0 0 .969-1.864v-39.667c-.644 4.611-.97 8.776-.97 12.425zm-3.435 8.071c.41-2.139 3.366-3.397 4.404-3.776v-3.95c-1.267 2.27-3.75 5.963-7.248 7.726zm-154.131 0h2.84c-3.497-1.763-5.98-5.457-7.246-7.727v3.951c1.037.38 3.995 1.637 4.406 3.776m-4.406-9.935c.108.236.436.934.969 1.866V618.31c0-3.649-.325-7.814-.97-12.425zm161.13-51.96c-.36.49-1.314 1.493-3.133 1.71a.912.912 0 0 1-.786.466.916.916 0 0 1-.807-.498c-1.378-.172-2.91-.72-4.583-1.678H424.649c-1.673.958-3.204 1.506-4.583 1.678a.915.915 0 0 1-.807.498.91.91 0 0 1-.785-.467c-1.82-.216-2.774-1.219-3.133-1.709h-1.811v8.996c.972 5.928 1.469 11.216 1.469 15.722v29.948c1.84 2.967 5.273 7.23 9.813 7.23h140.376c4.537 0 7.973-4.266 9.814-7.233V618.31c0-4.506.497-9.794 1.469-15.722v-8.996z" />
          </g>
        </g>
        <text
          transform="matrix(1.33333 0 0 1.33333 623.632 259.518)"
          fontWeight={400}
          fontSize={5.75}
          fontFamily="Scala Sans Offc"
        >
          <tspan
            y={0}
            x="0 3.197 6.2962499 9.6542501 12.72475 17.112 21.47625 24.897499 27.74375 29.46875 32.568001 35.730499 37.053001 40.152248 43.51025 46.931499 48.656502 51.755749"
          >
            PERSONALITY TRAITS
          </tspan>
        </text>
        <foreignObject x="550" y="180">
          <p
            ref={this.scollMe}
            style={{
              padding: 10,
              height: '70px',
              width: '220px',
              border: 'none',
              fontSize: 'x-small',
              fontFamily: 'Scala Sans Offc',
              overflowWrap: 'break-word',
              overflow: 'hidden'
            }}
          >
            {this.props.personalityTraits}
          </p>
        </foreignObject>
        <rect
          fill="transparent"
          x="550"
          y="180"
          width="220"
          height="88"
          onMouseLeave={this.onMouseLeave}
          onMouseOver={this.onMouseOver}
          onClick={this.props.showEditor}
          onWheel={(e) => this.wheel(e)}
        />
      </g>
    );
  }
}

const mapStateToProps = (state) => ({
  personalityTraits: getValue(state, 'personalityTraits', "personalityTraits") || "",
});
const mapDispatchToProps = (dispatch) => ({
  showEditor: () => dispatch(setDrawerRoute(PersonalityTraitsRoute))
});


export default connect(mapStateToProps, mapDispatchToProps)(PersonalityTraits);
