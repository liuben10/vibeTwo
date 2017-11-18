import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import { Header} from 'react-native-elements';
import { connect } from 'react-redux';
import { setLocation } from "../actions/locations";
import { fetchUsersForLocation } from "../actions/users";


import Footer from './footer';
import UserList from './userList';
import AddUser from './addUser';
import FriendsList from './friendsList';
import Api from '../lib/Api';

const DISCOVERING = 0;
const FRIENDS = 1;
const MESSAGES = 2;

class Vibe extends Component {

	constructor(props) {
		super(props);

		this.state = {
			appState: DISCOVERING,
			friendsDb: [],
		};

		this.initializeLocation();
	}

	initializeLocation() {
		navigator.geolocation.getCurrentPosition(
			(position) => {
				this.props.setCurrentLocation(position);
			},
			(error) => alert(error.message),
			{enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
		);
	}

	renderFactory (state) {
		return (prev) => {
			this.setState({appState: state});
		}
	};

	render() {
		let renderDiscovering = this.renderFactory(DISCOVERING);
		let renderFriends = this.renderFactory(FRIENDS);
		let renderMessages = this.renderFactory(MESSAGES);

		let mainComponent = (<UserList/>);
		if (this.state.appState == FRIENDS) {
			mainComponent = (<FriendsList/>);
		}

		return (
			<View style={styles.container}>
				<Header
					leftComponent={<AddUser></AddUser>}
					centerComponent={{ text: 'Discover', style: { color: '#fff' } }}
					rightComponent={{ icon: 'home', color: '#fff' }}
					backgroundColor='#2BAD86'
				/>
				{mainComponent}
				<Footer
					discoverSelect={renderDiscovering}
					friendsSelect={renderFriends}
					messagesSelect={renderMessages}
				></Footer>
			</View>
		);
	}
}

const mapStateToProps = (state) => {

	return {
		location: state.location
	}
};

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		setCurrentLocation: (location) => {
			dispatch(setLocation(location));
			dispatch(fetchUsersForLocation(location));
		},
		dispatch: dispatch
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Vibe);

const styles = StyleSheet.create({
	leftComponent: {
		color: '#fff'
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	emptyContainer: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center'
	}
});