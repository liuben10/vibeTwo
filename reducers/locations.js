import createReducer from '../lib/createReducer'
import * as types from '../actions/types';

export const CURRENT_LOCATION_ID = "currentLocationId";

export const setLocations = createReducer({}, {
	[types.SET_LOCATION](state, action) {
		let newState = {};
		console.log("Setting the new location");

		let currentLocation = action.location;

		newState[CURRENT_LOCATION_ID] = currentLocation;
		return newState;
	}
});