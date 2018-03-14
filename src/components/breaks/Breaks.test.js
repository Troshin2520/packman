import React from 'react';
import Renderer from 'react-test-renderer';
import Breaks from './Breaks';

describe('Breaks tests', () => {

  it('Breaks renders without crashing', () => {
    const component = Renderer.create(
      <Breaks />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});
