import { combineReducers } from 'redux';
import field from './field';
import spiders from './spiders';
import pacman from './pacman';

export default combineReducers({
  field,
  spiders,
  pacman
});