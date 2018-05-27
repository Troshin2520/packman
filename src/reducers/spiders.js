import {
  zones,
  colors,
  ACTION_MOVE_SPIDER,
  ACTION_CHANGE_ZONE,
  ACTION_PILL_ATE,
  ACTION_CHECK_POSITION,
  DRUG_DURATION,
  SPIDER_EATEN
} from '../constants';
import update from 'react-addons-update';

const initialState = zones[0].spiders;

const spidersReducer = (state = initialState, action) => {

  switch (action.type) {
    case ACTION_CHANGE_ZONE:
      return zones[action.payload].spiders;
    case ACTION_MOVE_SPIDER: {
      const {color} = action.payload;
      return update(state, {[color]: {$set: action.payload}});
    }
    case ACTION_PILL_ATE: {
      const obj = colors.reduce((res, key) => {
        const drugged = state[key].drugged === SPIDER_EATEN ? SPIDER_EATEN : DRUG_DURATION;
        return {...res, [key]: {...state[key], drugged: drugged, pursues: false}};
      }, {});
      return update(state, {$merge: obj});
    }
    case ACTION_CHECK_POSITION: {
      const {color, drugged} = action.payload;
      return update(state, {[color]: {$merge: {drugged: drugged}}});
    }
    default:
  }
  return state;
}

export default spidersReducer;
