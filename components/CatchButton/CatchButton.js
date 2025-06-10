import React from 'react';
import { Button, Alert } from 'react-native';
import * as Location from 'expo-location';

export default function CatchButton({ onCatch }) {
    const handlePress = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission denied', 'Location access is required to log a catch.');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        const timestamp = new Date().toISOString();

        onCatch({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            timestamp
        });
    };

    return <Button title="🎣 Simulate Catch" onPress={handlePress} />;
}
