import compose from 'redux/src/compose';
import React from 'react';
import FormTextField from '../../../../../form/FormTextField';
import {limit, onlyNumbers} from '../../../../../form/format';
import {Field, reduxForm} from 'redux-form';
import drawerRoute from '../../../../menu-drawer/drawerRoute';

export const HitPointsDrawerRoute = "hitPoints";

class HitPointsDrawer extends React.PureComponent {
  render() {
    return (
      <div>
        <form>
          <div>
            <Field
              name="currentHp"
              component={FormTextField}
              label="Current Hp"
              type="number"
              parse={compose(limit(4), onlyNumbers)}
            />
            <br />
            <Field
              name="maxHp"
              component={FormTextField}
              label="Max Hp"
              type="number"
              parse={compose(limit(4), onlyNumbers)}
            />
            <br />
            <Field
              name="tempMaxHp"
              component={FormTextField}
              label="Temporary Max Hp"
              type="number"
              parse={compose(limit(4), onlyNumbers)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default drawerRoute(HitPointsDrawerRoute)(reduxForm({form: "hitPoints", destroyOnUnmount: false})(HitPointsDrawer));
