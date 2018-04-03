import React from 'react';
import Renderer from 'react-test-renderer';
import Gates from './Gates';


describe('Gates tests', () => {

  it('Gates renders without crushing', () => {
    const component = Renderer.create(
      <Gates/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

});