import {zones, ACTION_CHANGE_ZONE, ACTION_PACMAN_EAT} from '../constants';

const initialState = zones[0].field;

const fieldReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_ZONE: {
      return zones[action.payload].field;
    }
    case ACTION_PACMAN_EAT: {
      const newState = state.slice(0);
      const {x, y} = action.payload;
      newState[y][x] = 0;
      return newState;
    }
    default:
  }
  return state;
}

export default fieldReducer;
