import {zones, ACTION_MOVE_SPIDER, ACTION_CHANGE_ZONE} from '../constants';
import update from 'react-addons-update';
const initialState = zones[0].spiders;

const spidersReducer = (state = initialState, action) => {

  switch (action.type) {
    case ACTION_CHANGE_ZONE:
      return zones[action.payload].spiders;
      break;
    case ACTION_MOVE_SPIDER:
      return update(state,{[action.payload.color]: {$set: action.payload}});
      break;
    default:
  }
  return state;

}

export default spidersReducer;