import React from 'react';
import Renderer from 'react-test-renderer';
import Pacman from './Pacman';

describe('Pacman tests', () => {

  it('Pacman rendered without crushing', () => {
    const component = Renderer.create(
      <Pacman />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
