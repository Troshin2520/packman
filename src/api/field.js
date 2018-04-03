export const getDirectionFromCode = function(code) {
  return code && /^Arrow[A-Z]+[a-z]+$/.test(code) ? code.toLowerCase().replace('arrow', '') : 'no';
}

export const increasePoint = (point, direction) => {
  switch (direction) {
    case 'up':
      point.y--;
      break;
    case 'left':
      point.x--;
      break;
    case 'down':
      point.y++;
      break;
    case 'right':
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
  if(newPoint.y < 0 && direction === 'up') {
    newPoint.y = field.length;
  }
  if(newPoint.y >= field.length && direction === 'down') {
    newPoint.y = -1;
  }
  if(newPoint.x < 0 && direction === 'left') {
    newPoint.x = rowLength;
  }
  if(newPoint.x >= rowLength && direction === 'right') {
    newPoint.x = -1;
  }
  return newPoint;
}

export const getAvailableDirections = (pt, arr) => {
  const points = {
    up:     {x: pt.x, y: pt.y - 1},
    left:   {x: pt.x - 1, y: pt.y},
    down:   {x: pt.x, y: pt.y + 1},
    right:  {x: pt.x + 1, y: pt.y}
  };
  let wrapped = wrapArrayByZerros(arr);
  return Object.keys(points).filter((key) => {
    let {x,y} = points[key];
    let point = wrapped[y + 1][x + 1];
    return [0, 1, 2].includes(point) || (point === 8 && key === 'up');
  });
}


export const wrapArrayByZerros = function(arr) {
  if(typeof arr !== 'object' || arr.length === 0) {
    return [[0,0][0,0]];
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