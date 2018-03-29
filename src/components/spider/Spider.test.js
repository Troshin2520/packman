import React from 'react';
import Renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import Enzyme, {mount} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import Spider from './Spider';

Enzyme.configure({ adapter: new Adapter() });

describe('Spider tests', () => {

  const initialState = {spiders:{red: {x: 6, y: 6, move: 'top'}}};
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it('Spider rendered without crushing', () => {
    const component = Renderer.create(
        <Spider color="red" store={store}/>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Spider props checked', () => {
    const component = mount(<Spider color="red" store={store}/>);
    expect(component.find('.spider').hasClass('red')).toBeTruthy();
    expect(component.find('.spider').hasClass('move-top')).toBeTruthy();
    expect(component.find('.spider').hasClass('turn-top')).toBeTruthy();
  });

});