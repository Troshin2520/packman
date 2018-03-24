import React from 'react';
import Renderer from 'react-test-renderer';
import Enzyme, {mount} from 'enzyme'
import Adapter from "enzyme-adapter-react-16";
import Spider from './Spider';

Enzyme.configure({ adapter: new Adapter() });

describe('Spider tests', () => {
  it('Spider rendered without crushing', () => {
    const component = Renderer.create(
      <Spider color="red" move="top" animationEnd={()=>{}} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Spider props checked', () => {
    const wrapper = mount(<Spider color="red" move="top" animationEnd={()=>{}} />);
    expect(wrapper.find('.spider').hasClass('red')).toBeTruthy();
    expect(wrapper.find('.spider').hasClass('move-top')).toBeTruthy();
  });

});