import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Avatar() {
    return (
        <View style={styles.container}>
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
    },
});

