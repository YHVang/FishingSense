import React, { useState, useEffect } from 'react';
import { LogBox } from 'react-native';
import * as Location from 'expo-location';
import Navigation from './components/Navigation';

export default function App() {
    const [catches, setCatches] = useState([]);
    const [currentLocation, setCurrentLocation] = useState(null);

    useEffect(() => {
        LogBox.ignoreLogs(['new NativeEventEmitter']);
    }, []);

    // 🧭 Get initial location on load
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.warn('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setCurrentLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
        })();
    }, []);

    return (
        <Navigation
            catches={catches}
            currentLocation={currentLocation}
            onCatch={(catchData) => {
                setCatches(prev => [...prev, catchData]);
                setCurrentLocation({ latitude: catchData.latitude, longitude: catchData.longitude });
            }}
        />
    );
}
