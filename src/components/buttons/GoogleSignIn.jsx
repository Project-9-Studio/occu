import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import SignInBtn from './SignInBtn';
import gmailLogo from '../../../assets/gmailLogo.png';

WebBrowser.maybeCompleteAuthSession();

export default function GoogleSignInButton() {
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '688888566122-3c1hpfde1elnvu7ou86dabrohm810kem.apps.googleusercontent.com',
        iosClientId: '688888566122-f0r6vtk9f68jsgvo1c703i36sj2pl6i9.apps.googleusercontent.com',
        //androidClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
        //webClientId: 'GOOGLE_GUID.apps.googleusercontent.com',
    });

    React.useEffect(() => {
        if (response?.type === 'success') {
          const { authentication } = response;
          console.log(authentication);
        }
    }, [response]);

    return (
        <SignInBtn 
            disabled={!request}
            logoSource={gmailLogo} 
            label="Continue with Google" 
            logoStyle={{ borderRadius: 6 }}
            onPress={promptAsync}
        />
    );
}