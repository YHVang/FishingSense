import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import FullLogScreen from '../screens/FullLogScreen';

const Stack = createNativeStackNavigator();

export default function Navigation({ catches, currentLocation, onCatch }) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Fishing Sense">
                    {() => <HomeScreen catches={catches} currentLocation={currentLocation} onCatch={onCatch} />}
                </Stack.Screen>
                <Stack.Screen name="Full Log">
                    {() => <FullLogScreen catches={catches} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
