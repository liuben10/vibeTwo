import React, {Component} from 'react';
import {
	View,
	Button
} from 'react-native';
import * as authManager from '../lib/OauthManager';

//Temporary login page for just signing up and creating a user if the user isn't signed up yet.
class LoginPage extends Component {

	constructor(props) {
		super(props);
	}

	fbLogin() {
		console.log("FB.login pressed");

		authManager.authManager.authorize('facebook', {scopes: 'profile email'})
			.then(
				resp => console.log("Logged into FB: " + resp))
			.catch(err => {
				console.log("There was an error: " + err);
				console.trace();
			});
	}

	render () {
		return (
			<View>
				<Button
					raised
					onPress={this.fbLogin}
					icon={{name: 'cached'}}
					title='Facebook Login' />
			</View>
		);
	}
}

export default LoginPage;