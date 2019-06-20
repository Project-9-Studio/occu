import React from 'react';
import { StyleSheet, Image, View } from 'react-native';

export default function Avatar({ image }) {
    return (
        <View style={styles.container}>
            <Image style={{ width: '100%', height: '100%' }} source={image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        width: 42,
        height: 42,
        borderRadius: 18,
        justifyContent: 'flex-end',
        overflow: 'hidden'
    },
});

