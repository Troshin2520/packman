import * as api from '../api/field';
import {ACTION_MOVE_SPIDER, ACTION_MOVE_PACMAN, ACTION_CHANGE_PACMAN_DIRECTION} from '../constants';


export const game = store => next => (action) => {
  const field = store.getState().field || [];
  switch (action.type) {
    case ACTION_MOVE_SPIDER:
      var pt = api.increasePoint({x:action.payload.x, y: action.payload.y}, action.payload.move);
      var dirs = api.getAvailableDirections(pt, field);
      var p = Math.round((Math.random() * 10) % (dirs.length - 1));
      if(dirs.length > 0) {
        if(!dirs.includes(action.payload.move)) {
          action.payload.move = dirs[p];
        }
        action.payload.x = pt.x;
        action.payload.y = pt.y;

      }
      break;

    case ACTION_MOVE_PACMAN:
      var pt = api.increasePoint({x:action.payload.x, y: action.payload.y}, action.payload.move);
      pt = api.fixOverstepping(pt, action.payload.move, field);
      var dirs = api.getAvailableDirections(pt, field);
      if(dirs.includes(action.payload.next)) {
        action.payload.move = action.payload.next;
      }
      if(dirs.includes(action.payload.move)) {
        action.payload.x = pt.x;
        action.payload.y = pt.y;
      }
      break;

    case ACTION_CHANGE_PACMAN_DIRECTION:
      action.payload = api.getDirectionFromCode(action.payload);
      break;
    default:
  }
  return next(action)
}


