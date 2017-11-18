import createReducer from '../lib/createReducer'
import * as types from '../actions/types';

export const currentUsers = createReducer({}, {
	[types.FETCH_USERS](state, action) {
		let newState = {};
		console.log("Reducer invoked");

		//ignore for now.
		// action.users.forEach( (user) => {
		// 	let id = friend.name;
		// 	newState[id] = Object.assign({}, friend, { id });
		// });
		// return newState;
	}
});