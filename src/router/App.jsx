import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/homeView';

const Stack = createStackNavigator();

export default function AuthNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={Home} 
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    );
}
