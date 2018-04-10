import {
  ACTION_CHECK_POSITION,
  ACTION_FEED_ATE,
  ACTION_PILL_ATE,
  ACTION_ZONE_CHANGED,
  statuses, zones
} from '../constants';
import * as api from "../api/game";

const initialState = {
    score: 0,
    zone: 0,
    status: statuses.play,
    feeds: api.getFeedsCount(zones[0].field),
    zones: zones.length
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_PILL_ATE:
    case ACTION_FEED_ATE:
      return {...state, feeds: state.feeds - 1, score: state.score + 1};
    case ACTION_ZONE_CHANGED:
      return {...state, feeds: action.payload.feeds};
    default:
  }
  return state;
}

export default gameReducer;