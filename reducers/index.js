import { combineReducers } from 'redux'

import * as friendsReducer from './friends';
import * as locationsReducer from './locations';


export default combineReducers(Object.assign(
	friendsReducer,
	locationsReducer
));