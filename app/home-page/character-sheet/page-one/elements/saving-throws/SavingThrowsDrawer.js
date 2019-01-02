import React from 'react';
import { Field, reduxForm } from 'redux-form';
import compose from 'redux/src/compose';
import { Divider } from 'semantic-ui-react';
import FormCheckbox from '../../../../../form/FormCheckbox';
import drawerRoute from '../../../../menu-drawer/drawerRoute';
import FormInput from '../../../../../form/FormInput';
import { limit, onlyNumbers } from '../../../../../form/format';
import { attributes } from '../attributes/state/attributesReducer';

export const SavingThrowsDrawerRoute = 'SavingThrows';

class SavingThrowsDrawer extends React.PureComponent {
  render() {
    return (
      <div>
        <form>
          {attributes.map(value => (
            <div>
              <h3>{value}</h3>
              <Field
                name={`${value}ThrowProficient`}
                component={FormCheckbox}
                label="Proficient"
                type="checkbox"
              />
              <Field
                name={`${value}OtherBonus`}
                component={FormInput}
                label="Other Bonus"
                type="number"
                parse={compose(limit(4), onlyNumbers)}
              />
              <Divider />
            </div>
          ))}
        </form>
      </div>
    );
  }
}

export default drawerRoute(SavingThrowsDrawerRoute)(
  reduxForm({ form: 'savingThrows', destroyOnUnmount: false })(
    SavingThrowsDrawer
  )
);
