import {zones, ACTION_MOVE_SPIDER, ACTION_CHANGE_ZONE} from '../constants';
import update from 'react-addons-update';
const initialState = zones[0].spiders;

const spidersReducer = (state = initialState, action) => {

  if (action.type === ACTION_CHANGE_ZONE) {
    return zones[action.payload].spiders;
  }
  if (action.type === ACTION_MOVE_SPIDER) {
    return update(state,{[action.payload.color]: {$set: action.payload}});
  }
  return state;
}

export default spidersReducer;