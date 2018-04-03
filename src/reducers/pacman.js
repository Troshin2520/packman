import {zones, ACTION_MOVE_PACMAN, ACTION_CHANGE_ZONE, ACTION_CHANGE_PACMAN_DIRECTION} from '../constants';
import update from 'react-addons-update';
const initialState = zones[0].pacman;

const pacmanReducer = (state = initialState, action) => {

  switch (action.type) {
    case ACTION_CHANGE_ZONE:
      return  zones[action.payload].pacman;
      break;
    case ACTION_MOVE_PACMAN:
      return update(state,{$merge: action.payload});
      break;
    case ACTION_CHANGE_PACMAN_DIRECTION:
      return update(state, {$merge: action.payload});
      break;
    default:
  }

  return state;
}

export default pacmanReducer;