import React from 'react';
import {Menu, Segment, Sidebar} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {openDrawer, closeDrawer} from './state/menuDrawerActions'
import {drawerRoutes} from './drawerRoute';
import styles from './MenuDrawer.css';

class TemporaryDrawer extends React.Component {

  render() {
    const {setOpen, isOpen, route, childProps} = this.props;
    const ActiveRoute = drawerRoutes[route] ? drawerRoutes[route] : () => null;

    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='overlay'
          icon='labeled'
          vertical
          visible={isOpen}
        >
          <div>
            <svg
              onClick={() => setOpen(false)}
              className={styles.closeButton}
            >
              <use xlinkHref="#si-glyph-delete"/>
            </svg>
            <div className={styles.container}>
              <ActiveRoute {...childProps} />
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
