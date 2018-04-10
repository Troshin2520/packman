import {combineReducers} from 'redux';
import field from './field';
import spiders from './spiders';
import pacman from './pacman';
import game from './game';

export default combineReducers({
  field,
  spiders,
  pacman,
  game
});