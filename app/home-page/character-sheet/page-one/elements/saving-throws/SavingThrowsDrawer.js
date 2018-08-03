import React from 'react';
import {Field, reduxForm} from 'redux-form';
import FormGroup from '@material-ui/core/es/FormGroup/FormGroup';
import FormLabel from '@material-ui/core/es/FormLabel/FormLabel';
import FormControl from '@material-ui/core/es/FormControl/FormControl';
import withStyles from '@material-ui/core/es/styles/withStyles';
import compose from 'redux/src/compose';
import FormCheckbox from '../../../../../form/FormCheckbox';
import drawerRoute from '../../../../menu-drawer/drawerRoute';
import FormTextField from '../../../../../form/FormTextField';
import {limit, onlyNumbers} from '../../../../../form/format';
import {attributes} from '../attributes/state/attributesMutator';

export const SavingThrowsDrawerRoute = 'SavingThrows';

const styles = theme => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
});

class SavingThrowsDrawer extends React.PureComponent {
  render() {
    const {classes} = this.props;

    return (
      <div>
        <form>
          {attributes.map(value => (
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">{value}</FormLabel>
              <FormGroup>
                <Field
                  name={`${value}ThrowProficient`}
                  component={FormCheckbox}
                  label="Proficient"
                  type='checkbox'
                />
                <Field
                  name={`${value}OtherBonus`}
                  component={FormTextField}
                  label="Other Bonus"
                  type="number"
                  parse={compose(limit(4), onlyNumbers)}
                />
              </FormGroup>
            </FormControl>
          ))}
        </form>
      </div>
    );
  }
}

export default drawerRoute(SavingThrowsDrawerRoute)(withStyles(styles)((reduxForm({form: 'savingThrows', destroyOnUnmount: false})(SavingThrowsDrawer))));
