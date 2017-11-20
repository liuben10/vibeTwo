import { combineReducers } from 'redux'
import { firebaseStateReducer } from 'react-redux-firebase';

import * as friendsReducer from './friends';
import * as locationsReducer from './locations';

export default combineReducers(Object.assign(
	friendsReducer,
	locationsReducer,
	firebaseStateReducer
));