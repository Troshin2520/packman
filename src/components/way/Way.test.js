import React from 'react';
import Renderer from 'react-test-renderer';
import Enzyme, {mount} from 'enzyme'
import Adapter from "enzyme-adapter-react-16";
import configureStore from 'redux-mock-store';
import Way from './Way';

Enzyme.configure({ adapter: new Adapter() });

describe('Way testing', () => {

  const initialState = {field: [[4, 0, 4],
                                [0, 1, 2],
                                [4, 4, 4]
                              ]};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('Way rendered without crushing', () => {
    const component = Renderer.create(
      <Way store={store} x={0} y={1}  />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Checked default type', () => {
    const wrapper = mount(<Way store={store} x={1} y={0}/>);
    expect(wrapper.find('.way').hasClass('empty')).toBeTruthy();
  });

  it('`pill` attribute added successfully', () => {
    const wrapper = mount(<Way store={store} x={1} y={1}/>);
    expect(wrapper.find('.way').hasClass('feed')).toBeTruthy();
  });

  it('`pill` attribute added successfully', () => {
    const wrapper = mount(<Way store={store} x={2} y={1}/>);
    expect(wrapper.find('.way').hasClass('pill')).toBeTruthy();
  });

});