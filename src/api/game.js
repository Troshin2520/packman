import {directions} from '../constants';

export const getDirectionFromCode = function (code) {
  return code && /^Arrow[A-Z]+[a-z]+$/.test(code) ? code.toLowerCase().replace('arrow', '') : 'no';
}

export const increasePoint = (point, direction) => {
  switch (direction) {
    case directions.up:
      point.y--;
      break;
    case directions.left:
      point.x--;
      break;
    case directions.down:
      point.y++;
      break;
    case directions.right:
      point.x++;
      break;
    default:
  }
  return point;
}

export const fixOverstepping = function (point, direction, field) {
  let newPoint = point;
  field = field || [[]];
  field[0] = field[0] || [];
  direction = direction || '';
  let rowLength = field[0].length;
  if (newPoint.y < 0 && direction === directions.up) {
    newPoint.y = field.length;
  }
  if (newPoint.y >= field.length && direction === directions.down) {
    newPoint.y = -1;
  }
  if (newPoint.x < 0 && direction === directions.left) {
    newPoint.x = rowLength;
  }
  if (newPoint.x >= rowLength && direction === directions.right) {
    newPoint.x = -1;
  }
  return newPoint;
}

export const pointsEqual = function(pt1, pt2) {
  return pt1.x === pt2.x && pt1.y === pt2.y;
}

export const pointInArray = function(pt, arr) {
  return typeof arr === 'object' &&
          pt.y >= 0 && pt.y < arr.length &&
          typeof arr[pt.y] ===  'object' &&
          pt.x >= 0 && pt.x < arr[pt.y].length;

}

export const pointsInLine = function (pt1, pt2, field) {
  if(!pointInArray(pt1, field) || !pointInArray(pt1, field)) {
    return false;
  }
  if(pt1.x === pt2.x ) {
    let i = pt1.y
    while(i !== pt2.y) {
      if(field[i][pt1.x] > 2) {
        return false;
      }
      i < pt2.y ? i++ : i--;
    }
  }
  if(pt1.y === pt2.y) {
    let i = pt1.x
    while(i !== pt2.x) {
      if(field[pt1.y][i] > 2) {
        return false;
      }
      i < pt2.x ? i++ : i--;
    }
  }
  return true;
}


export const wrapArrayByZerros = function (arr) {
  if (typeof arr !== 'object' || arr.length === 0) {
    return [[0,0],[0,0]];
  }
  let newField = arr.slice(0);
  const len = newField[0].length;
  newField.unshift(Array(len).fill(0));
  newField.push(Array(len).fill(0));
  newField = newField.map(function (line) {
    let newLine = line.slice(0);
    newLine.unshift(0);
    newLine.push(0);
    return newLine
  });
  return newField;
}

export const getAvailableDirections = (pt, arr) => {
  const points = {
    up: {x: pt.x, y: pt.y - 1},
    left: {x: pt.x - 1, y: pt.y},
    down: {x: pt.x, y: pt.y + 1},
    right: {x: pt.x + 1, y: pt.y}
  };
  let wrapped = wrapArrayByZerros(arr);
  return Object.keys(points).filter((key) => {
    let {x, y} = points[key];
    if (typeof wrapped[y + 1] !== 'undefined') {
      let point = wrapped[y + 1][x + 1];
      return [0, 1, 2].includes(point) || (point === 8 && key === directions.up);
    }
    return false;
  });
}


export const getRandomDirection = function (dirs, curDir) {
  if(typeof dirs !== 'object' || dirs.length === 0) {
    return directions.no;
  }
  if(dirs.includes(curDir)) {
    return curDir;
  }
  const r = Math.round((Math.random() * 10) % (dirs.length - 1));
  return dirs[r];

}


export const getPreferredDirection  = function (current, goal, dirs) {

}