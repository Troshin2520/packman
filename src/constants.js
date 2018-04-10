export const BLOCK_SIZE = 4;
export const DRUG_DURATION = 5;

export const ACTION_CHANGE_PACMAN_DIRECTION = 'CHANGE_PACMAN_DIRECTION';
export const ACTION_CHANGE_ZONE = 'CHANGE_ZONE';
export const ACTION_ZONE_CHANGED = 'ZONE_CHANGED';
export const ACTION_MOVE_SPIDER = 'MOVE_SPIDER';
export const ACTION_MOVE_PACMAN = 'MOVE_PACMAN';
export const ACTION_PACMAN_EAT = 'PACMAN_EAT';
export const ACTION_FEED_ATE = 'FEED_ATE';
export const ACTION_PILL_ATE = 'PILL_ATE';
export const ACTION_CHECK_POSITION = 'CHECK_POSITION';
export const ACTION_USER_WON = 'USER_WON';


export const directions = {up: 'up', down: 'down', left: 'left', right:'right', no: 'no'};
export const colors = ['red', 'green', 'blue', 'orange'];
export const statuses = ['won', 'lost', 'play'];

export const zones = [
  {
    field: [
      [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      [4, 2, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2, 4],
      [4, 1, 4, 4, 4, 1, 4, 1, 4, 4, 4, 1, 4],
      [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
      [4, 1, 4, 0, 4, 8, 8, 8, 4, 0, 4, 1, 4],
      [0, 1, 4, 0, 4, 0, 0, 0, 4, 0, 4, 1, 0],
      [4, 1, 4, 0, 4, 4, 4, 4, 4, 0, 4, 1, 4],
      [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
      [4, 1, 4, 4, 4, 1, 4, 1, 4, 4, 4, 1, 4],
      [4, 2, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2, 4],
      [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
    ],
    pacman: {x: 6, y: 7, move: directions.no, next: directions.no},
    spiders: {
      red: {x: 6, y: 4, speed: 3},
      green: {x: 6, y: 5, speed: 3},
      orange: {x: 5, y: 5, speed: 3},
      blue: {x: 7, y: 5, speed: 3}
    },
  },
  {
    field: [
      [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      [4, 2, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2, 4],
      [4, 1, 4, 4, 4, 1, 4, 1, 4, 4, 4, 1, 4],
      [4, 1, 4, 4, 4, 1, 4, 1, 4, 4, 4, 1, 4],
      [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
      [4, 1, 4, 0, 4, 8, 8, 8, 4, 0, 4, 1, 4],
      [0, 1, 4, 0, 4, 0, 0, 0, 4, 0, 4, 1, 0],
      [4, 1, 4, 0, 4, 4, 4, 4, 4, 0, 4, 1, 4],
      [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
      [4, 1, 4, 4, 4, 1, 4, 1, 4, 4, 4, 1, 4],
      [4, 1, 4, 4, 4, 1, 4, 1, 4, 4, 4, 1, 4],
      [4, 2, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2, 4],
      [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
    ],
    pacman: {x: 6, y: 8, move: directions.no, next: directions.no},
    spiders: {
      red: {x: 6, y: 6, speed: 2},
      green: {x: 6, y: 6, speed: 2},
      orange: {x: 5, y: 6, speed: 2},
      blue: {x: 7, y: 6, speed: 2}
    }
  },
  {
    field: [
      [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      [4, 2, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2, 4],
      [4, 1, 4, 4, 4, 1, 4, 1, 4, 4, 4, 1, 4],
      [4, 1, 4, 4, 4, 1, 4, 1, 4, 4, 4, 1, 4],
      [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
      [4, 1, 4, 0, 4, 8, 8, 8, 4, 0, 4, 1, 4],
      [0, 1, 4, 0, 4, 0, 0, 0, 4, 0, 4, 1, 0],
      [4, 1, 4, 0, 4, 4, 4, 4, 4, 0, 4, 1, 4],
      [4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
      [4, 1, 4, 4, 4, 1, 4, 1, 4, 4, 4, 1, 4],
      [4, 1, 4, 4, 4, 1, 4, 1, 4, 4, 4, 1, 4],
      [4, 2, 1, 1, 1, 1, 4, 1, 1, 1, 1, 2, 4],
      [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
    ],
    pacman: {x: 6, y: 9, move: directions.no, next: directions.no},
    spiders: {
      red: {x: 6, y: 7, speed: 1},
      green: {x: 6, y: 7, speed: 1},
      orange: {x: 5, y: 7, speed: 1},
      blue: {x: 7, y: 7, speed: 1}
    }
  }
];