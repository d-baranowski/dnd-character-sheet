import React from 'react';
import { Field, reduxForm } from 'redux-form';
import drawerRoute from '../../../../../menu-drawer/drawerRoute';
import { limit } from '../../../../../../form/format';
import FormInput from '../../../../../../form/FormInput';

export const CharacterNameDrawerRoute = 'CharacterName';

class CharacterNameDrawer extends React.PureComponent {
  constructor() {
    super();
    this.characterNameTextBox = React.createRef();
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <Field
              name="characterName"
              component={FormInput}
              label="Character Name"
              format={limit(20)}
              ref={this.characterNameTextBox}
              withRef="true"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default drawerRoute(CharacterNameDrawerRoute)(
  reduxForm({ form: 'characterName', destroyOnUnmount: false })(
    CharacterNameDrawer
  )
);
