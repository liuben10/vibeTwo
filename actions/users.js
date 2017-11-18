import * as types from './types'
import Api from '../lib/Api';

export function fetchUsersForLocation(location) {
	return (dispatch, getState) => {
		let queryString = "lat=" + location.coords.latitude + "&long=" + location.coords.longitude;

		return Api.get("/api/users?" + queryString).then(res => {
			dispatch(setNearbyUsers(res));
		}).catch(ex => {
			console.log("Error fetching users: " + ex);
		})
	}
}

export function setNearbyUsers({ users }) {
	console.log("Set friends with!");
	return {
		type: types.FETCH_USERS,
		users,
	}
}