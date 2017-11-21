import React, {Component} from 'react';
import {
	View
} from 'react-native';
import { Button } from 'react-native-elements';

//Temporary login page for just signing up and creating a user if the user isn't signed up yet.
class facebookLoginButton extends Component {

	facebookLogin() {
		
	}

	render () {
		return (
			<View>
				<Button
					raised
					onPress={facebookLogin}
					icon={{name: 'cached'}}
					title='Friends Select' />
			</View>
		);
	}
}