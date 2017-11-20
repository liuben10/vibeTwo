import React, {Component} from 'react';
//TODO integrate Firebase
// import { bindActionCreators, combineReducers } from 'redux';
// import { reactReduxFirebase, firebaseStateReducer } from 'react-redux-firebase'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combinReduxers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';
import Vibe from './components/vibe';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__});

//NOT USING FIREBASE FOR NOW. Instead, must use WEB solution (Can't use firebase since app needs to be deployed
//to IOS store to be able to use the apikey. The below Api key is for Web.
// const firebaseConfig = {
// 	apiKey: "AIzaSyBtecIPrlcuO5KbPRoiPPHNwPK4wodE7d0",
// 	authDomain: "vibe-186423.firebaseapp.com",
// 	databaseURL: "https://vibe-186423.firebaseio.com",
// 	projectId: "vibe-186423",
// 	storageBucket: "vibe-186423.appspot.com",
// 	messagingSenderId: "36228599136"
// };
//
// const reduxFirebaseConfig = {userProfile: 'users' }
//
// const createStoreWithFirebase = compose(
// 	reactReduxFirebase(firebaseConfig, reduxFirebaseConfig)
// )(createStore);

function configureStore(initialState) {
	const enhancer = compose(
		applyMiddleware(
			thunkMiddleware,
			loggerMiddleware
		)
	);
	return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

export default class App extends Component {

	constructor(props) {
		super(props);
	}

	render () {
		return (
            <Provider store={store}>
              <Vibe />
            </Provider>
		)
	}
}