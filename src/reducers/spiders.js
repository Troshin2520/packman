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
    case ACTION_MOVE_SPIDER:
      return update(state, {[action.payload.color]: {$set: action.payload}});
    case ACTION_PILL_ATE:
      const obj = colors.reduce((o, key) => ({ ...o, [key]: {...state[key], drugged: DRUG_DURATION, pursues: false}}), {});
      return update(state, {$merge: obj});
    default:
  }
  return state;

}

export default spidersReducer;