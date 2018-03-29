import React from 'react';
import Provider from 'redux';
import Renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Pacman from './Pacman';

describe('Pacman tests', () => {

  it('Pacman rendered without crushing', () => {

    const initialState = {pacman:{x: 6, y: 8, dir: 'left'}};
    const mockStore = configureStore();
    const store = mockStore(initialState);

    const component = Renderer.create(
        <Pacman store={store} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
