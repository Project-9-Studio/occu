import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function FilterJobs() {
    return (
        <View style={styles.container}>
            <Text style={styles.status}>Applied</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#232323',
        borderRadius: 18,
        marginTop: 15,
        marginBottom: 15,
        padding: 10
    },
    status: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'public-sans',
        fontSize: 18,
        color: 'white'
    }
});

