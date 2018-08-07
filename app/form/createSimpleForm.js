import compose from 'redux/src/compose';
import React from 'react';
import {Field, reduxForm} from 'redux-form';
import FormInput from './FormInput';
import {limit, onlyNumbers} from './format';
import drawerRoute from '../home-page/menu-drawer/drawerRoute';
import FormTextArea from './FormTextArea';

const createSimpleForm = (name, label, form, route, type = "number") => {
  class SimpleDrawer extends React.PureComponent {
    render() {
      return (
        <div>
          <form>
            <div>
              {type === "number" &&
                <Field
                  name={name}
                  component={FormInput}
                  label={label}
                  type="number"
                  parse={compose(limit(2), onlyNumbers)}
                />
              }
              {type === "textarea" &&
                <Field
                  name={name}
                  component={FormTextArea}
                  label={label}
                  type="text"
                />
              }
            </div>
          </form>
        </div>
      );
    }
  }

  drawerRoute(route)(reduxForm({form, destroyOnUnmount: false})(SimpleDrawer));
};

export default createSimpleForm;
