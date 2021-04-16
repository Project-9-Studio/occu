import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ScreenView from './ScreenView';
import signInImage from '../../assets/signin_illustration.png';
import SignInBtn from './buttons/SignInBtn';
import appleLogo from '../../assets/appleLogo.png';
import gmailLogo from '../../assets/gmailLogo.png';

export default function SignIn() {
    return (
        <ScreenView style={{ backgroundColor: '#ffffff' }}>
            <View style={styles.container}>
                <Text style={styles.headerText}>
                    Occu
                </Text>

                <View style={styles.imageContainer}>
                    <Image source={signInImage} style={styles.mainImage} />
                </View>

                <View style={styles.imageContainer}>
                    <Text style={styles.subHeaderText}>
                        Keep a tab on all of your job applications
                    </Text>
                </View>

                <View style={{ flex: 1 }} />

                <View style={styles.actionsContainer}>
                    <SignInBtn 
                        logoSource={appleLogo} 
                        label="Continue with Apple" 
                        containerStyle={{ marginBottom: 20 }}
                    />
                    <SignInBtn 
                        logoSource={gmailLogo} 
                        label="Continue with Google" 
                        logoStyle={{ borderRadius: 6 }}
                    />
                </View>
            </View>
        </ScreenView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingTop: 70
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 53,
        textAlign: 'center',
        marginBottom: 57
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    mainImage: {
        width: '100%',
        maxWidth: 366
    },
    subHeaderText: {
        width: 231,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    actionsContainer: {
        marginBottom: 100,
        alignItems: 'center'
    }
})
