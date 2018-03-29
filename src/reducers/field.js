import {zones, ACTION_CHANGE_ZONE} from '../constants';

const initialState = zones[0].field;

const fieldReducer = (state = initialState, action) => {
  if (action.type === ACTION_CHANGE_ZONE) {
    return zones[action.payload].field;
  }
  return state;
}

export default fieldReducer;