import redux from 'redux';
import configureStore from 'redux-mock-store';
import reducer from '../reducers';
import game from '../middleware/game';
import {directions} from '../constants';


describe('Actions tests', () => {

  const initialState = {
    field: [
      [4, 1, 4, 0, 0, 0, 0, 0, 0, 0, 4, 1, 4],
      [4, 1, 4, 0, 4, 8, 8, 8, 4, 0, 4, 1, 4]
    ],
    speed: 0.6,
    pacman: {x: 6, y: 8, dir: directions.left},
    spiders: {
      red: {x: 6, y: 6, move: directions.up}
    }
  };

  const middlewares = [];
  const mockStore = configureStore(middlewares);
  const store = mockStore(initialState);

  it('to do', () => {

  });

});