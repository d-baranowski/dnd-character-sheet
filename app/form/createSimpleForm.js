import compose from 'redux/src/compose';
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import FormTextField from './FormTextField';
import {limit, onlyNumbers} from './format';
import drawerRoute from '../home-page/menu-drawer/drawerRoute';

const createSimpleForm = (name, label, form, route) => {
  class SimpleDrawer extends React.PureComponent {
    render() {
      return (
        <div>
          <form>
            <div>
              <Field
                name={name}
                component={FormTextField}
                label={label}
                type="number"
                parse={compose(limit(2), onlyNumbers)}
              />
            </div>
          </form>
        </div>
      );
    }
  }

  drawerRoute(route)(reduxForm({form, destroyOnUnmount: false})(SimpleDrawer));
};

export default createSimpleForm;
