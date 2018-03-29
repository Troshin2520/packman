import {zones, ACTION_MOVE_PACMAN, ACTION_CHANGE_ZONE} from '../constants';
const initialState = zones[0].pacman;

const pacmanReducer = (state = initialState, action) => {
  if (action.type === ACTION_CHANGE_ZONE) {
    return  zones[action.payload].pacman;
  }
  if (action.type === ACTION_MOVE_PACMAN) {
    return [...state, action.payload];
  }
  return state;
}

export default pacmanReducer;