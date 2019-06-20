import * as Facebook from 'expo-facebook';
import { Google } from 'expo';
import { Auth } from 'aws-amplify';
import slice from './slice';

export function loginWithFacebook() {
    return async (dispatch) => {
        const { type, token, expires } = await Facebook.logInWithReadPermissionsAsync("321618182071489", {
        permissions: ["public_profile", "email"]
        });
    
        if (type === "success") {
            const response = await fetch(
                `https://graph.facebook.com/me?access_token=${token}&fields=name,email,first_name,last_name,picture`
            );
            
            const user = await response.json();
            const creds = await Auth.federatedSignIn('facebook', { token, expires_at: expires }, user);
            dispatch(slice.actions.setUser(creds));
        }
    };
}

export function loginWithGoogle() {
    return async (dispatch) => {
        const { type, accessToken, user } = await Google.logInAsync({
            iosClientId: '166196681540-tjmc7knsktsrpcfrkbj7n7gch2eed5ge.apps.googleusercontent.com',
            androidClientId: '166196681540-vdsrqmd2ik2tvmf9jdeh1naa192945l8.apps.googleusercontent.com',
        });
        
        if (type === 'success') {
            const response = await fetch('https://www.googleapis.com/userinfo/v2/me', {
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            const userInfo = await response.json();
            const creds = await Auth.federatedSignIn('google', { token: accessToken }, userInfo);
            dispatch(slice.actions.setUser(creds));
        }
    }
}
