import * as api from '../api/game';
import {
  ACTION_MOVE_SPIDER,
  ACTION_MOVE_PACMAN,
  ACTION_CHANGE_PACMAN_DIRECTION, ACTION_CHANGE_ZONE,
  ACTION_PACMAN_EAT,
  ACTION_CHECK_POSITION,
  ACTION_ZONE_CHANGED,
  SPIDER_EATEN,
  directions, zones
} from '../constants';


export const game = store => next => (action) => {

  const state = store.getState();
  const field = state.field || [];
  switch (action.type) {
    case ACTION_MOVE_SPIDER: {
      const pt = api.increasePoint(action.payload, action.payload.move);
      const dirs = api.getAvailableDirections(pt, field);
      if (action.payload.drugged > 0) {
        action.payload.move = api.getRandomDirection(dirs, action.payload.move);
      } else {
        const goal = action.payload.drugged ? state.game.center : state.pacman;
        action.payload.move = api.getPreferredDirection(action.payload, goal, dirs, action.payload.move);
      }
      action.payload = {...action.payload, ...pt};
      if (action.payload.drugged > 0) {
        action.payload.drugged--;
      }
    }
      break;

    case ACTION_MOVE_PACMAN: {
      let pt = api.increasePoint({x: action.payload.x, y: action.payload.y}, action.payload.move);
      pt = api.fixOverstepping(pt, action.payload.move, field);
      const dirs = api.getAvailableDirections(pt, field);
      if (dirs.includes(action.payload.next)) {
        action.payload.move = action.payload.next;
      }
      if (!dirs.includes(action.payload.move)) {
        action.payload.move = directions.no;
      }
      action.payload = {...action.payload, ...pt};
    }
      break;

    case ACTION_CHANGE_PACMAN_DIRECTION:
      const dir = api.getDirectionFromCode(action.payload);
      action.payload = {next: dir};
      if (state.pacman.move === directions.no) {
        const pt = api.increasePoint({x: state.pacman.x, y: state.pacman.y}, action.payload);
        const dirs = api.getAvailableDirections(pt, field);
        if (dirs.includes(dir)) {
          action.payload.move = dir;
        }
      }
      break;

    case ACTION_PACMAN_EAT:
      const nextPt = api.increasePoint({x: state.pacman.x, y: state.pacman.y}, state.pacman.move);
      if (api.pointInArray(nextPt, state.field)) {
        action.payload = nextPt;
      }
      break;

    case ACTION_CHECK_POSITION:{
        const center = state.game.center;
        const { drugged } = action.payload;
        if (drugged === SPIDER_EATEN) {
          if (api.pointsEqual(action.payload, center)) {
            action.payload.drugged = 0;
          }
        }
        if (api.pointsEqual(action.payload, state.pacman)) {
          if (drugged > 0) {
            action.payload.drugged = SPIDER_EATEN;
          }
        }
      }
      break;

    case ACTION_ZONE_CHANGED:
      const { zone } = action.payload;
      action.payload.feeds = api.getFeedsCount(zones[zone].field);
      break;
    default:
  }
  return next(action);
}
