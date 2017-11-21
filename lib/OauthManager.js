import OAuthManager from 'react-native-oauth';


export const authManager = new OAuthManager('vibe');
authManager.configure({
	facebook: {
		client_id: "2010695009142051",
		client_secret: "2d92159dd1082af95f9db41aa1f4b572"
	}
});