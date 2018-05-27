import React from 'react';
import Renderer from 'react-test-renderer';
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import Way from './Way';

Enzyme.configure({adapter: new Adapter()});

describe('Way testing', () => {

  const initialState = {
    field: [
      [4, 0, 4],
      [0, 1, 2],
      [4, 4, 4]
    ]
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('Way rendered without crushing', () => {
    const component = Renderer.create(
      <Way has={1} x={0} y={1}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Checked default type', () => {
    const wrapper = mount(<Way x={1} y={0}/>);
    expect(wrapper.find('.way').hasClass('empty')).toBeTruthy();
  });
});
