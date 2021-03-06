import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../../../../../../form/FormInput';
import drawerRoute from '../../../../../menu-drawer/drawerRoute';
import { setClassLevel } from './state/classesActions';

export const ClassAndLevelDrawerRoute = 'ClassAndLevel';

class ClassAndLevelDrawer extends React.PureComponent {
  render() {
    const { dndClasses } = this.props;
    return (
      <form>
        <div>
          {Object.entries(dndClasses).map(([className, classProperties]) => (
            <div>
              <FormInput
                label={`${className} Level`}
                type="number"
                onChange={event => {
                  this.props.setClassLevel(className, event.target.value);
                }}
                value={classProperties.level}
              />
              <br />
            </div>
          ))}
        </div>
      </form>
    );
  }
}

const mapSateToProps = state => ({
  dndClasses: state.homePageReducer.classesReducer.classes
});
const mapDispatchToProps = dispatch => ({
  setClassLevel: (className, level) => {
    dispatch(setClassLevel(className, level));
  }
});

const Connected = connect(mapSateToProps, mapDispatchToProps)(
  ClassAndLevelDrawer
);

export default drawerRoute(ClassAndLevelDrawerRoute)(Connected);
