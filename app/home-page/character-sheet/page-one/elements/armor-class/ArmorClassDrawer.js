import compose from 'redux/src/compose';
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import FormInput from '../../../../../form/FormInput';

import {limit, onlyNumbers} from '../../../../../form/format';
import drawerRoute from '../../../../menu-drawer/drawerRoute';

export const ArmorClassDrawerRoute = 'ArmorClass';

class ArmorClassDrawer extends React.PureComponent {


  render() {
    return (
      <div>
        <form>
          <div>
            <Field
              name="ArmorClass"
              component={FormInput}
              label="Armor Class"
              type="number"
              parse={compose(limit(2), onlyNumbers)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default drawerRoute(ArmorClassDrawerRoute)(reduxForm({form: 'armorClass', destroyOnUnmount: false})(ArmorClassDrawer));
