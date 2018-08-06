import React from 'react';
import {connect} from 'react-redux';
import {Input} from 'semantic-ui-react';
import feats from './5e-SRD-Feats.json';
import features from './5e-SRD-Features.json';
import traits from './5e-SRD-Traits.json';
import drawerRoute from '../../../../menu-drawer/drawerRoute';
import styles from './FeaturesAndTraitsDrawer.css';
import {openModal, pickFeat} from './state/featuresAndTraitsActions';


export const FeaturesAndTraitsDrawerRoute = "FeaturesAndTraits";
const allPossibleValues = feats.concat(features).concat(traits).sort((a,b) => {
  if(a.name < b.name) return -1;
  if(a.name > b.name) return 1;
  return 0;
});

class FeaturesAndTraitsDrawer extends React.PureComponent {
  state = {
    searchTerm: "",
    filteredFeats: allPossibleValues
  };

  handleChange = (event) => {
    const matchingFeats = allPossibleValues.filter((feat) => feat.name.toUpperCase().includes(event.target.value.toUpperCase()));
    console.log(matchingFeats);
    this.setState({
      searchTerm: event.target.value,
      filteredFeats: matchingFeats
    });
  };

  render() {
    return (
      <div>
        <Input
          autoFocus
          icon='search'
          placeholder='Search...'
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        {
          this.state.filteredFeats.map((feat) => (
            <div>
              <h3
                style={{display: 'inline-block'}}
                key={feat.name}
                className={styles.displayFeat}
                onClick={() => this.props.openModal(feat)}
              >
                {feat.name}
              </h3>
              <svg
                onClick={() => this.props.pickFeat(feat)}
                className={styles.addFeat}
                width={20}
                height={20}
              >
                <use xlinkHref="#icon-add" />
              </svg>
            </div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  openModal: (feat) => dispatch(openModal(feat)),
  pickFeat: (feat) => dispatch(pickFeat(feat))
});

export default drawerRoute(FeaturesAndTraitsDrawerRoute)(connect(mapStateToProps, mapDispatchToProps)(FeaturesAndTraitsDrawer));
