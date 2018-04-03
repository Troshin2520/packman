import * as api from '../api/field';
import {ACTION_MOVE_SPIDER,
        ACTION_MOVE_PACMAN,
        ACTION_CHANGE_PACMAN_DIRECTION, ACTION_CHANGE_ZONE,
        ACTION_PACMAN_EAT} from '../constants';


export const game = store => next => (action) => {
  const state = store.getState();
  const field = state.field || [];
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
      if(!dirs.includes(action.payload.move)) {
        action.payload.move = 'no';
      }
      action.payload.x = pt.x;
      action.payload.y = pt.y;
      break;

    case ACTION_CHANGE_PACMAN_DIRECTION:
      let dir = api.getDirectionFromCode(action.payload);
      action.payload = {next: dir};
      if(state.pacman.move === 'no') {
        var pt = api.increasePoint({x: state.pacman.x, y: state.pacman.y}, action.payload);
        var dirs = api.getAvailableDirections(pt, field);
        if(dirs.includes(dir)) {
          action.payload.move = dir;
        }
      }
      break;

    case ACTION_PACMAN_EAT:
      action.payload = api.increasePoint({x: state.pacman.x, y: state.pacman.y}, state.pacman.move);
      break;

    default:
  }
  return next(action)
}


