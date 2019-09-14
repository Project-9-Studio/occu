import * as Facebook from 'expo-facebook';
import * as GoogleSignIn from 'expo-google-sign-in';
import { Auth } from 'aws-amplify';
import slice from './slice';

export function loginWithFacebook() {
    return async (dispatch) => {
        try {
            const { type, token, expires } = await Facebook.logInWithReadPermissionsAsync("321618182071489", {
                permissions: ["public_profile", "email"],
                behavior: 'web'
            });
        
            if (type === "success") {
                const response = await fetch(
                    `https://graph.facebook.com/me?access_token=${token}&fields=name,email,first_name,last_name,picture`
                );
                
                const user = await response.json();
                await Auth.federatedSignIn('facebook', { token, expires_at: expires }, user);

                const authUser = await Auth.currentAuthenticatedUser();
                dispatch(slice.actions.setUser(authUser));
            }
        } catch ({ message }) {
            alert(message);
        }
    };
}

export function loginWithGoogle() {
    return async (dispatch) => {
        try {
            await GoogleSignIn.initAsync({
                clientId: '166196681540-vde9evnjpugillpr4s18om94eolmj9k1.apps.googleusercontent.com'
            });

            await GoogleSignIn.askForPlayServicesAsync();
            const { type, user } = await GoogleSignIn.signInAsync();
            
            if (type === 'success') {
                await Auth.federatedSignIn('google', { token: user.auth.idToken }, user);
                const authUser = await Auth.currentAuthenticatedUser();
                dispatch(slice.actions.setUser(authUser));
            }
        } catch ({ message }) {
            alert(`google login error: ${message}`);
        }
    }
}

export function logout() {
    Auth.signOut();
    return (dispatch) => dispatch(slice.actions.setUser(null));
}
