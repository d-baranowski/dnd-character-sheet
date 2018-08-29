import React from 'react';
import {Input, Menu, Segment, Sidebar} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {openDrawer, closeDrawer} from './state/menuDrawerActions'
import {drawerRoutes} from './drawerRoute';
import styles from './MenuDrawer.css';

class TemporaryDrawer extends React.Component {
  state = {
    searchTerm: ""
  };

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  };

  render() {
    const {setOpen, isOpen, route, childProps} = this.props;
    const { hasSearchBar } = childProps || {};
    const ActiveRoute = drawerRoutes[route] ? drawerRoutes[route] : () => null;

    return (
      <Sidebar.Pushable as={Segment} className={styles.noMargin}>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          vertical
          visible={isOpen}
        >
          <div style={{ width: "100%",  height: 55 }}>
            {hasSearchBar && <Input
              autoFocus
              style={{float: "left", marginTop: 15, marginLeft: 15}}
              icon='search'
              placeholder='Search...'
              value={this.state.searchTerm}
              onChange={this.handleChange}
            />}
            <svg
              onClick={() => setOpen(false)}
              className={styles.closeButton}
            >
              <use xlinkHref="#si-glyph-delete" />
            </svg>
          </div>
          <div style={{overflowY: 'auto', height: 'calc(100% - 55px)'}}>
            <div className={styles.container}>
              <ActiveRoute searchTerm={this.state.searchTerm} {...childProps} />
            </div>
          </div>
        </Sidebar>
        <Sidebar.Pusher>
            {this.props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

const mapStateToProps = state => ({
  isOpen: state.homePageReducer.menuDrawerReducer.open,
  route: state.homePageReducer.menuDrawerReducer.route,
  childProps: state.homePageReducer.menuDrawerReducer.props
});

const mapDispatchToProps = dispatch => ({
  setOpen: (shouldOpen) => {
    if (shouldOpen) {
      dispatch(openDrawer())
    } else {
      dispatch(closeDrawer())
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TemporaryDrawer);
