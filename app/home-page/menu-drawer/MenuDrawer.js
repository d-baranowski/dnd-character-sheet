import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class TemporaryDrawer extends React.Component {
  state = {
    bottom: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggleDrawer('bottom', true)}>Open Bottom</Button>
        <Drawer
          variant='persistent'
          anchor="bottom"
          open={this.state.bottom}
          onClose={this.toggleDrawer('bottom', false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('bottom', false)}
            onKeyDown={this.toggleDrawer('bottom', false)}
          >
            <div>Hello World</div>
            <div>Hello World</div>
            <div>Hello World</div>
            <div>Hello World</div>
            <div>Hello World</div>
            <div>Hello World</div>
            <div>Hello World</div>
            <div>Hello World</div>
            <div>Hello World</div>
            <div>Hello World</div>
            <div>Hello World</div>
            <div>Hello World</div>
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);
