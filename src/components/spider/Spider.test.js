import React from 'react';
import Renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Enzyme, {mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Spider from './Spider';

Enzyme.configure({ adapter: new Adapter() });

describe('Spider tests', () => {

  const initialState = {spiders:{
      red: {x: 6, y: 6, move: 'top'},
      green: {x: 6, y: 6, move: 'top'},
      blue: {x: 6, y: 6, move: 'top'},
      orange: {x: 6, y: 6, move: 'top'}
  }};

  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('Spider rendered without crushing', () => {
    const component = Renderer.create(
        <Spider color="red" store={store}/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Spider rendered without crushing', () => {
    const component = Renderer.create(
      <Spider color="green" store={store}/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Spider rendered without crushing', () => {
    const component = Renderer.create(
      <Spider color="blue" store={store}/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Spider rendered without crushing', () => {
    const component = Renderer.create(
      <Spider color="orange" store={store}/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });


});