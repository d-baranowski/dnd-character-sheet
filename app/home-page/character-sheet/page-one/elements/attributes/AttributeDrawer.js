import React from 'react';
import {Field, reduxForm} from 'redux-form';
import FormTextField from '../../../../../form/FormTextField';
import drawerRoute from '../../../../menu-drawer/drawerRoute';
import {limit, onlyNumbers} from '../../../../../form/format';
import compose from 'redux/src/compose';

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
                   type="number"
                   parse={compose(limit(2), onlyNumbers)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default drawerRoute(AttributeDrawerRoute)(reduxForm({form: 'attributes'})(AttributeDrawer));
