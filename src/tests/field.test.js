import * as api from '../api/field';
import {directions} from "../constants";

describe('field functions tests', () => {

  const field = [
    [4, 1, 4, 0, 0, 4],
    [0, 1, 4, 0, 0, 0],
    [4, 1, 1, 0, 0, 4],
    [4, 1, 4, 8, 4, 4]
  ];

  it('getDirectionFromCode function tested', () => {
    expect(api.getDirectionFromCode('ArrowDown')).toEqual(directions.down);
    expect(api.getDirectionFromCode('ArrowUp')).toEqual(directions.up);
    expect(api.getDirectionFromCode('ArrowRight')).toEqual(directions.right);
    expect(api.getDirectionFromCode('ArrowLeft')).toEqual(directions.left);
    expect(api.getDirectionFromCode('someString')).toEqual(directions.no);
    expect(api.getDirectionFromCode('somestring')).toEqual(directions.no);
    expect(api.getDirectionFromCode('')).toEqual(directions.no);
    expect(api.getDirectionFromCode()).toEqual(directions.no);
  });

  it('increasePoint function tested', () => {
    expect(api.increasePoint({x: 5, y: 7}, directions.up)).toMatchObject({x: 5, y: 6});
    expect(api.increasePoint({x: 5, y: 7}, directions.down)).toMatchObject({x: 5, y: 8});
    expect(api.increasePoint({x: 5, y: 7}, directions.left)).toMatchObject({x: 4, y: 7});
    expect(api.increasePoint({x: 5, y: 7}, directions.right)).toMatchObject({x: 6, y: 7});
    expect(api.increasePoint({x: 5, y: 7}, 'somestring')).toMatchObject({x: 5, y: 7});
    expect(api.increasePoint({x: 5, y: 7})).toMatchObject({x: 5, y: 7});
  });

  it('fixOverstepping function tested', () => {
    expect(api.fixOverstepping({x: -1, y: 1}, directions.left, field)).toMatchObject({x: 6, y: 1});
    expect(api.fixOverstepping({x: 6, y: 1}, directions.right, field)).toMatchObject({x: -1, y: 1});
    expect(api.fixOverstepping({x: 3, y: -1}, directions.up, field)).toMatchObject({x: 3, y: 4});
    expect(api.fixOverstepping({x: 3, y: 4}, 'somestring', field)).toMatchObject({x: 3, y: 4});
    expect(api.fixOverstepping({x: 3, y: 4}, 'somestring')).toMatchObject({x: 3, y: 4});
    expect(api.fixOverstepping({x: 3, y: 4})).toMatchObject({x: 3, y: 4});
  });

  it('getAvailableDirections function tested', () => {
    expect(api.getAvailableDirections({x: 3, y: 1}, field))
      .toEqual(expect.arrayContaining([directions.up, directions.down, directions.right]));

    expect(api.getAvailableDirections({x: 3, y: 1}, field))
      .toHaveLength(3);

    expect(api.getAvailableDirections({x: 0, y: 1}, field))
      .toEqual(expect.arrayContaining([directions.right, directions.left]));

    expect(api.getAvailableDirections({x: 0, y: 1}, field))
      .toHaveLength(2);

    expect(api.getAvailableDirections({x: 5, y: 1}, field))
      .toEqual(expect.arrayContaining([directions.left, directions.right]));

    expect(api.getAvailableDirections({x: 5, y: 1}, field))
      .toHaveLength(2);

    expect(api.getAvailableDirections({x: 1, y: 0}, field))
      .toEqual(expect.arrayContaining([directions.up, directions.down]));

    expect(api.getAvailableDirections({x: 1, y: 0}, field))
      .toHaveLength(2);
  });


  it('wrapArrayByZerros function tested', () => {
    const result = api.wrapArrayByZerros(field);
    const height = field.length + 2;
    const width = field[0].length + 2;

    expect(result).toHaveLength(height);
    expect(result[0]).toEqual(expect.arrayContaining(Array(width).fill(0)));
    expect(result[height - 1]).toEqual(expect.arrayContaining(Array(width).fill(0)));
    result.forEach(function (row, i) {
      expect(row).toHaveLength(width);
      expect(row[0]).toEqual(0);
      expect(row[width - 1]).toEqual(0);
    });

  });


});