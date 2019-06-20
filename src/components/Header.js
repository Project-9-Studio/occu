import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar';

export default function AppHeader({ image }) {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.header}>Occu</Text>
                <Avatar image={{ uri: image }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EFEFF4',
        height: 110,
        justifyContent: 'flex-end',
        alignSelf: 'stretch',
        paddingLeft: 24,
        paddingRight: 24,
        paddingBottom: 12,
    },
    inner: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header: {
        fontFamily: 'public-sans-bold',
        fontSize: 28
    }
});

