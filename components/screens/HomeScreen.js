import React from 'react';
import { View } from 'react-native';
import Header from '../Header';
import MapView from '../MapView';
import CatchButton from '../CatchButton';
import CatchLog from '../CatchLog';
import styles from './HomeScreen.styles'; // assuming this file exists in the same folder


export default function HomeScreen({ catches, currentLocation, onCatch }) {
    console.log('📍 HomeScreen received currentLocation:', currentLocation);
    return (
        <View style={styles.container}>
            <Header />
            <MapView currentLocation={currentLocation} catches={catches} />
            <CatchButton onCatch={onCatch} />
            <CatchLog catches={(catches || []).filter(c => {
                const today = new Date().toDateString();
                return new Date(c.timestamp).toDateString() === today;
            })} />
        </View>
    );
}
