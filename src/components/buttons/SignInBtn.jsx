import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function SignInBtn(props) {
    return (
        <Pressable style={[styles.container, props.containerStyle]} onPress={props.onPress}>
            <Image source={props.logoSource} style={[styles.logo, props.logoStyle]} />
            <View style={{ flex: 1 }} />
            <Text style={[styles.text, props.labelText]}>
                {props.label}
            </Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        maxWidth: 300,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 6,
        alignItems: 'center'
    },
    logo: {
        width: 44,
        height: 44
    },
    text: {
        fontSize: 19,
        marginRight: 50
    }
});
