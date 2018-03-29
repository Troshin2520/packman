import {ACTION_MOVE_SPIDER} from '../constants';

export const game = store => next => (action) => {
  switch (action.type) {
    case ACTION_MOVE_SPIDER:
      const {color, ...pos} = action.payload;
      const field = store.getState().field || [];
      const dirs = getAvailableDirections(pos, field);
      if(dirs.length > 0) {
        let p = Math.round((Math.random() * 10) % (dirs.length - 1));
        for(let i = 0; i < dirs.length; i++) {
          if(dirs[i].move === action.payload.move) {
            p = i;
          }
        }
        action.payload.x = dirs[p].x;
        action.payload.y = dirs[p].y;
        action.payload.move = dirs[p].move;
      }

      break;
  }
  return next(action)
}

const increasePoint = (point, direction) => {
  switch (direction) {
    case 'top':
      point.y -= 1;
      break;
    case 'left':
      point.x -= 1;
      break;
    case 'bottom':
      point.y += 1;
      break;
    case 'right':
      point.x += 1;
      break;
  }
  return point;
}

const getAvailableDirections = (data, field) => {
  const pt = increasePoint(data, data.move)
  const points =   [{move:'top' ,x: pt.x, y: pt.y - 1},
                    {move:'left', x: pt.x - 1, y: pt.y},
                    {move:'bottom', x: pt.x, y: data.y + 1},
                    {move:'right', x: pt.x + 1, y: pt.y}];
  return points.filter((object) => {
    const point = field[object.y][object.x];
    object.x = pt.x;
    object.y = pt.y;
    return typeof point != 'undefined' && [0,1,2,8].includes(point);
  });
}

