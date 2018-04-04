import React from 'react';
import Provider from 'redux';
import Renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import {directions} from '../../constants';
import Pacman from './Pacman';

describe('Pacman tests', () => {

  const initialState = {pacman: {x: 6, y: 8, move: directions.left, next: directions.up}};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('Pacman rendered without crushing', () => {
    const component = Renderer.create(
      <Pacman store={store}/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
