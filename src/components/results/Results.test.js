import React from 'react';
import Renderer from 'react-test-renderer';
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import Result from '../results/Results';


Enzyme.configure({adapter: new Adapter()});

describe('Results testing', () => {

  const initialState = {};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('Result rendered without crushing', () => {
    /*const component = Renderer.create(
      <Result/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();*/
  });


});
