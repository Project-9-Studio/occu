import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { actions } from '../models/auth';

const Login = connect(null, {
    loginWithFB: actions.loginWithFacebook,
    loginWithGoogle: actions.loginWithGoogle
  })(function({ loginWithFB, loginWithGoogle }) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text style={styles.header}>Occu</Text>
          <Text style={styles.sub}>The index to your future</Text>
          <Text style={styles.description}>
            Welcome to Occu. sit amet, consectetur adipiscing elit.
            Donec varius accumsan ipsum at congue.
          </Text>

          <View style={{ flex: 1 }} />
          
          <View style={{ marginBottom: 25, width: '100%' }}>
            <TouchableOpacity onPress={loginWithFB} style={styles.fb}>
                <Text style={{ color: 'white' }}>LOGIN WITH FACEBOOK</Text>
            </TouchableOpacity>
          </View>
      
          <TouchableOpacity onPress={loginWithGoogle} style={styles.google}>
            <Text style={{ color: 'white' }}>LOGIN WITH GOOGLE</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
});

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 60,
      paddingBottom: 60,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: 'public-sans',
    },
    header: {
        fontFamily: 'public-sans-bold',
        fontSize: 36,
        marginBottom: 30
    },
    sub: {
        fontSize: 26,
        marginBottom: 4
    },
    description: {
        textAlign: 'center',
        fontSize: 12
    },
    fb: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 16,
        backgroundColor: '#DB4437',
        width: '100%',
        padding: 12
    },
    google: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        borderRadius: 16,
        backgroundColor: '#1778F2',
        width: '100%',
        padding: 12
    }
  });