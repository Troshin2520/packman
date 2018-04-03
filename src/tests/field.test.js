import * as api from '../api/field';


describe('field functions tests', () => {

  const field = [
    [4, 1, 4, 0, 0, 4],
    [0, 1, 4, 0, 0, 0],
    [4, 1, 1, 0, 0, 4],
    [4, 1, 4, 8, 4, 4]
  ];

  it('getDirectionFromCode function tested', () => {
    expect(api.getDirectionFromCode('ArrowDown')).toEqual('down');
    expect(api.getDirectionFromCode('ArrowUp')).toEqual('up');
    expect(api.getDirectionFromCode('ArrowRight')).toEqual('right');
    expect(api.getDirectionFromCode('ArrowLeft')).toEqual('left');
    expect(api.getDirectionFromCode('someString')).toEqual('no');
    expect(api.getDirectionFromCode('somestring')).toEqual('no');
    expect(api.getDirectionFromCode('')).toEqual('no');
    expect(api.getDirectionFromCode()).toEqual('no');
  });

  it('increasePoint function tested', () => {
    expect(api.increasePoint({x: 5, y: 7}, 'up')).toMatchObject({x: 5, y: 6});
    expect(api.increasePoint({x: 5, y: 7}, 'down')).toMatchObject({x: 5, y: 8});
    expect(api.increasePoint({x: 5, y: 7}, 'left')).toMatchObject({x: 4, y: 7});
    expect(api.increasePoint({x: 5, y: 7}, 'right')).toMatchObject({x: 6, y: 7});
    expect(api.increasePoint({x: 5, y: 7}, 'somestring')).toMatchObject({x: 5, y: 7});
    expect(api.increasePoint({x: 5, y: 7})).toMatchObject({x: 5, y: 7});
  });

  it('fixOverstepping function tested', () => {
    expect(api.fixOverstepping({x: -1, y: 1}, 'left', field)).toMatchObject({x: 6, y: 1});
    expect(api.fixOverstepping({x: 6, y: 1}, 'right', field)).toMatchObject({x: -1, y: 1});
    expect(api.fixOverstepping({x: 3, y: -1}, 'up', field)).toMatchObject({x: 3, y: 4});
    expect(api.fixOverstepping({x: 3, y: 4}, 'somestring', field)).toMatchObject({x: 3, y: 4});
    expect(api.fixOverstepping({x: 3, y: 4}, 'somestring')).toMatchObject({x: 3, y: 4});
    expect(api.fixOverstepping({x: 3, y: 4})).toMatchObject({x: 3, y: 4});
  });

  it('getAvailableDirections function tested', () => {
    expect(api.getAvailableDirections({x: 3, y: 1}, field))
      .toEqual(expect.arrayContaining(['up', 'down', 'right']));

    expect(api.getAvailableDirections({x: 3, y: 1}, field))
      .toHaveLength(3);

    expect(api.getAvailableDirections({x: 0, y: 1}, field))
      .toEqual(expect.arrayContaining(['right', 'left']));

    expect(api.getAvailableDirections({x: 0, y: 1}, field))
      .toHaveLength(2);

    expect(api.getAvailableDirections({x: 5, y: 1}, field))
      .toEqual(expect.arrayContaining(['left', 'right']));

    expect(api.getAvailableDirections({x: 5, y: 1}, field))
      .toHaveLength(2);

    expect(api.getAvailableDirections({x: 1, y: 0}, field))
      .toEqual(expect.arrayContaining(['up', 'down']));

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