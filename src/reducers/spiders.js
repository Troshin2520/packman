import {zones, colors, ACTION_MOVE_SPIDER,
                ACTION_CHANGE_ZONE,
                ACTION_PILL_ATE,
                DRUG_DURATION} from '../constants';
import update from 'react-addons-update';

const initialState = zones[0].spiders;

const spidersReducer = (state = initialState, action) => {

  switch (action.type) {
    case ACTION_CHANGE_ZONE:
      return zones[action.payload].spiders;
      break;
    case ACTION_MOVE_SPIDER:
      return update(state, {[action.payload.color]: {$set: action.payload}});
      break;
    case ACTION_PILL_ATE:
      const obj = colors.reduce((o, key) => ({ ...o, [key]: {...state[key], drugged: 10, pursues: false}}), {});
      return update(state, {$merge: obj});
      break;
    default:
  }
  return state;

}

export default spidersReducer;