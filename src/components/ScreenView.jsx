import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

export default function ScreenView(props) {
    return (
        <SafeAreaView style={[styles.safeAreaView, props.style]}>
            <StatusBar barStyle={props.statusBarStyle} />
            {props.children}
        </SafeAreaView>
    );
}

ScreenView.defaultProps = {
    statusBarStyle: 'dark-content'
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1
    }
})