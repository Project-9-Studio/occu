import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import Avatar from './Avatar';

export default function AppHeader({ image, logout, onAdd }) {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <TouchableOpacity onPress={logout}>
                    <Avatar image={{ uri: image }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.add} onPress={onAdd}>
                    <Image source={require('../../assets/plus_icon.png')} />
                </TouchableOpacity>
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
    },
    add: {
        width: 42,
        height: 42,
        borderRadius: 42,
        backgroundColor: '#00F2FE',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

