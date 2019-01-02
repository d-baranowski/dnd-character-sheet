import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import AddButton from "./AddButton";

describe('<AddButton />', () => {
  it('renders three <svg /> component', () => {
    const wrapper = shallow(<AddButton />);
    expect(wrapper.find('svg').length).toBe(1);
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<AddButton onClick={onButtonClick} />);
    wrapper.find('svg').simulate('click');
    expect(onButtonClick.callCount).toBe(1);
  });
});
