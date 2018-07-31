import React from 'react';
import {Field, reduxForm} from 'redux-form';
import FormTextField from '../../../../../form/FormTextField';
import drawerRoute from '../../../../menu-drawer/drawerRoute';
import {limit} from '../../../../../form/format';

export const AttributeDrawerRoute = 'Attribute';

class AttributeDrawer extends React.PureComponent {
  render() {
    return (
      <div>
        <form>
          <div>
            <Field name={this.props.name}
                   component={FormTextField}
                   label={this.props.name}
                   parse={limit(2)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default drawerRoute(AttributeDrawerRoute)(reduxForm({form: 'attributes'})(AttributeDrawer));
