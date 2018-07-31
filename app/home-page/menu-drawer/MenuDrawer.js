import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux';
import {openDrawer, closeDrawer} from './state/menuDrawerActions'
import {drawerRoutes} from './drawerRoute';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome/index.es';
import styles from './MenuDrawer.css';

class TemporaryDrawer extends React.Component {

  render() {
    const {setOpen, isOpen, route, childProps} = this.props;
    const ActiveRoute = drawerRoutes[route] ?  drawerRoutes[route] : () => null;

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open Bottom</Button>
        <Drawer
          variant='persistent'
          anchor="bottom"
          open={isOpen}
        >
          <div className="padded container">
            <FontAwesomeIcon
              onClick={() => setOpen(false)}
              icon="times-circle"
              className={styles.closeButton}
            />
            <ActiveRoute {...childProps} />
          </div>
        </Drawer>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TemporaryDrawer));
