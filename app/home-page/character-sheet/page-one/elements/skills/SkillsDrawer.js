import React from 'react';
import {Divider} from 'semantic-ui-react';
import {Field, reduxForm} from 'redux-form';
import compose from 'redux/src/compose';
import {skills} from './SkillsContainer';
import FormCheckbox from '../../../../../form/FormCheckbox';
import FormTextField from '../../../../../form/FormTextField';
import {limit, onlyNumbers} from '../../../../../form/format';
import drawerRoute from '../../../../menu-drawer/drawerRoute';

export const SkillsDrawerRoute = 'Skills';

class SkillsDrawer extends React.PureComponent {
  render() {
    return (
      <div>
        <form>
          {
            skills.map(value => (
              <div>
                <h3>{value.name}</h3>
                <Field
                  name={`${value.name}Proficient`}
                  component={FormCheckbox}
                  label="Proficient"
                  type='checkbox'
                />
                <Field
                  name={`${value.name}OtherBonus`}
                  component={FormTextField}
                  label="Other Bonus"
                  type="number"
                  parse={compose(limit(4), onlyNumbers)}
                />
                <Divider />
              </div>
            ))
          }
        </form>
      </div>
    )
  }
}

export default drawerRoute(SkillsDrawerRoute)(reduxForm({form: 'skills', destroyOnUnmount: false})(SkillsDrawer))
