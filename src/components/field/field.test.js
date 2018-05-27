import React from 'react';
import configureStore from 'redux-mock-store';
import Renderer from 'react-test-renderer';
import Field from './Field';
import {directions} from "../../constants";


const initialState = {
  field: [
    [4, 1, 4, 0, 0, 0, 0, 0, 0, 0, 4, 1, 4],
    [4, 1, 4, 0, 4, 8, 8, 8, 4, 0, 4, 1, 4]
  ],
  speed: 0.6,
  pacman: {x: 6, y: 8, dir: directions.left},
  spiders: {
    red: {x: 6, y: 6, move: directions.up}
  },
};

const mockStore = configureStore();
const store = mockStore(initialState);

describe('Gates tests', () => {

  it('Gates renders without crushing', () => {
    const component = Renderer.create(
      <Field store={store}/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
