import React from 'react';
import {connect} from 'react-redux';
import FormGroup from '@material-ui/core/es/FormGroup/FormGroup';
import FormControl from '@material-ui/core/es/FormControl/FormControl';
import withStyles from '@material-ui/core/es/styles/withStyles';
import FormTextField from '../../../../../../form/FormTextField';
import drawerRoute from '../../../../../menu-drawer/drawerRoute';
import {setClassLevel} from './state/classesActions';


export const ClassAndLevelDrawerRoute = 'ClassAndLevel';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
});


class ClassAndLevelDrawer extends React.PureComponent {
  render() {
    const {dndClasses, classes} = this.props;
    return (
      <div>
        <form>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>
                {Object.entries(dndClasses).map(([className, classProperties]) => (
                  <FormTextField
                    label={`${className} Level`}
                    type="number"
                    onChange={(event) => {
                      this.props.setClassLevel(className, event.target.value)
                    }}
                    value={classProperties.level}
                  />
                ))}
              </FormGroup>
            </FormControl>

        </form>
      </div>
    );
  }
}

const mapSateToProps = (state) => ({
  dndClasses: state.homePageReducer.classesReducer.classes
});
const mapDispatchToProps = (dispatch) => ({
  setClassLevel: (className, level) => {
    dispatch(setClassLevel(className, level))
  }
});

const Connected = connect(mapSateToProps, mapDispatchToProps)(ClassAndLevelDrawer);

export default drawerRoute(ClassAndLevelDrawerRoute)(withStyles(styles)(Connected));
