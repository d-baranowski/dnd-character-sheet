import React, {Component} from 'react';
import CampFire from "./CampFire";
import {Button} from "semantic-ui-react";
import {connect} from "react-redux";
import "./CampfireContainer.scss";

class CampfireContainer extends Component {
  state = {
    showConfirmation: false
  };

  constructor(props) {
    super(props);
  }

  showFireOverlay = () => {
    this.setState({showConfirmation: false});
    const element = document.getElementById('fire-overlay');
    element.style.display = 'unset';
    element.style.opacity = 0;

    setTimeout(() => {
      element.style.opacity = 0.9;
    }, 0);

    setTimeout(() => {
      element.style.opacity = 0;
      setTimeout(() => {
        element.style.display = 'none';
      }, 1000);
    }, 1600);
    this.props.longRest();
  };

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      if (event.target.id === "startLongRest") {
        return true;
      }
      this.setState({showConfirmation: false});
    }
  };

  render() {
    return (
      <div>
        <CampFire onClick={(event) => {
          if (this.state.showConfirmation === false) {
            this.setState({showConfirmation: true})
          }
        }}/>
        <div
          ref={this.setWrapperRef}
          className="transition-position no-select"
          style={
            {
              display: 'flex',
              position: 'fixed',
              top: 75,
              left: this.state.showConfirmation ? 10 : -400,
              zIndex: 1,
              padding: 10,
              background: 'white',
              boxShadow: 'rgb(204, 204, 204) 0px 1px 2px'
            }
          }
        >
          <p style={{margin: 0, padding: 0, marginRight: 5, lineHeight: '28px'}}>Do you want to take a long rest?</p>
          <Button onClick={() => {
            this.setState({showConfirmation: false})
          }} size='mini' color='red'>No</Button>
          <Button onClick={() => {
            this.showFireOverlay();
          }} size='mini' color='blue'>Yes</Button>
        </div>
        <div style={{display: 'none', opacity: 0}} id="fire-overlay"/>
      </div>
    );
  }
}

CampfireContainer.propTypes = {};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  longRest: () => dispatch({type: "LONG_REST"})
});

export default connect(mapStateToProps, mapDispatchToProps)(CampfireContainer);
