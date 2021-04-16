import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../components/SignIn';

const Stack = createStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="SignIn" 
                component={SignIn} 
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}
