import {
  ACTION_CHANGE_ZONE, ACTION_CHECK_POSITION,
  ACTION_FEED_ATE,
  statuses, zones
} from '../constants';
import * as api from "../api/game";

const initialState = {
    score: 0,
    zone: 1,
    status: statuses.play,
    feeds: api.getFeedsCount(zones[0].field),
    zones: zones.length
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_FEED_ATE:
      return {...state, ...{feeds: state.feeds - 1, score: state.score + 1}};
    case ACTION_CHANGE_ZONE:
      const count = api.getFeedsCount(zones[action.payload].field);
      return {...state, ...{feeds: count, zone: action.payload}};
    default:
  }
  return state;
}

export default gameReducer;