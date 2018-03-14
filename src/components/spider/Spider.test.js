import React from 'react';
import Renderer from 'react-test-renderer';
import Enzyme, {mount} from 'enzyme'
import Adapter from "enzyme-adapter-react-16";
import Spider from './Spider';

Enzyme.configure({ adapter: new Adapter() });

describe('Spider tests', () => {
  it('Spider rendered without crushing', () => {
    const component = Renderer.create(
      <Spider />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Checked color prop', () => {
    const wrapper = mount(<Spider color="red" dirX="left" dirY="top" />);
    expect(wrapper.find('.spider').hasClass('spider-red')).toBeTruthy();
    expect(wrapper.find('.spider').hasClass('spider-direction-top')).toBeTruthy();
    expect(wrapper.find('.spider').hasClass('spider-direction-left')).toBeTruthy();
  });

});