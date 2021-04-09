import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function FilterJobs() {
    return (
        <View>
            <TouchableOpacity style={styles.container}>
                <Text style={styles.status}>Applied</Text>
                <View style={styles.icon}>
                    <Entypo name="sound-mix" size={22} color="white" />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flexDirection: 'row',
        backgroundColor: '#232323',
        borderRadius: 18,
        marginTop: 15,
        marginBottom: 10,
        marginLeft: 25,
        marginRight: 25,
        padding: 10
    },
    status: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'public-sans',
        fontSize: 18,
        color: 'white'
    },
    icon: {
        position: 'absolute',
        right: 24,
        top: 9
    }
});

