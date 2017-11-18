import * as types from './types'

export function setLocation(location) {
	return (dispatch, getState) => {
		console.log("Setting App location");
		dispatch(setLocationObj({location: location}));
	}
}

export function setLocationObj({ location }) {
	console.log("Setting App location");
	return {
		type: types.SET_LOCATION,
		location,
	}
}