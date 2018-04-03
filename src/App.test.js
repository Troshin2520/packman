import React from 'react';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import Renderer from 'react-test-renderer';
import App from './App';



it('App renders without crashing', () => {

  const initialState = {
    field: [
      [4, 1, 4, 0, 0, 0, 0, 0, 0, 0, 4, 1, 4],
      [4, 1, 4, 0, 4, 8, 8, 8, 4, 0, 4, 1, 4]
    ],
    speed: 0.6,
    pacman: {x: 6, y: 8, dir: 'left'},
    spiders: {
      red:{x: 6, y: 6, move: 'up'}
    },
  };

  const mockStore = configureStore();
  const store = mockStore(initialState);

  const component = Renderer.create(
    <App store={store}/>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
