import {zones, ACTION_CHANGE_ZONE} from '../constants';

const initialState = zones[0];

const zoneReducer = (state = initialState, action) => {
  if (action.type === ACTION_CHANGE_ZONE) {
    return  zones[action.payload];
  }
  return state;
}

export default zoneReducer;