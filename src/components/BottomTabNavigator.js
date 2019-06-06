import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign, Entypo, MaterialCommunityIcons as Material } from '@expo/vector-icons';


export function HomeTab({ active }) {
    return (active) ? (
        <View style={styles.textContainer}>
            <Text style={styles.text}>Home</Text>
            <View style={styles.dot} />
        </View>
    ) : (
        <TouchableOpacity>
            <Entypo name="home" size={24} />
        </TouchableOpacity>
    );
};

export function AddButton() {
    return (
        <TouchableOpacity style={{ marginBottom: 10 }}>
            <AntDesign name="pluscircle" size={44} />
        </TouchableOpacity>
    );
}

export function TimelineButton({ active }) {
    return (active) ? (
        <View style={styles.textContainer}>
            <Text style={styles.text}>History</Text>
            <View style={styles.dot} />
        </View>
    ) : (
        <TouchableOpacity>
            <Material name="clock" size={40} />
        </TouchableOpacity>
    );
}

export default function BottomTabNavigator({ navigation = {} }) {
    const { state, navigate } = navigation;

    return (
        <View style={styles.container}>
            <HomeTab active={state.routeName === "Home"} navigate={navigate} />
            <AddButton active={state.routeName === "Add"} navigate={navigate} />
            <TimelineButton active={state.routeName === "Timeline"} navigate={navigate} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F8F8F8',
        height: 100,
        paddingLeft: 60,
        paddingRight: 60,
        paddingBottom: 20
    },
    textContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'public-sans',
        color: '#030F09',
        fontSize: 16
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 6,
        backgroundColor: '#1FDA9A'
    },
    add: {
        backgroundColor: '#232323',
        width: 36,
        height: 36,
        borderRadius: 17,
        paddingTop: 3,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

