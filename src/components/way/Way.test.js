import React from 'react';
import Renderer from 'react-test-renderer';
import Enzyme, {mount} from 'enzyme'
import Adapter from "enzyme-adapter-react-16";
import Way from './Way';

Enzyme.configure({ adapter: new Adapter() });

describe('Way testing', () => {

  it('Way rendered without crushing', () => {
    const component = Renderer.create(
      <Way />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Checked default type', () => {
    const wrapper = mount(<Way />);
    expect(wrapper.find('.way').hasClass('empty')).toBeTruthy();
  });

  it('`pill` attribute added successfully', () => {
    const wrapper = mount(<Way has={1} />);
    expect(wrapper.find('.way').hasClass('feed')).toBeTruthy();
  });

});