import React from 'react';
import { Text } from 'react-native';
import { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapViewComponent from 'react-native-maps';
import styles from './MapView.styles';

export default function MapView({ currentLocation, catches }) {
    if (!currentLocation) {
        return <Text>📍 Loading map...</Text>;
    }

    const region = {
        latitude: currentLocation.latitude,
        longitude: currentLocation.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    return (
        <MapViewComponent
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            region={region}
        >
            {catches.map((catchEntry, index) => (
                <Marker
                    key={index}
                    coordinate={{
                        latitude: catchEntry.latitude,
                        longitude: catchEntry.longitude,
                    }}
                    title={`Catch #${index + 1}`}
                    description={catchEntry.timestamp}
                />
            ))}
        </MapViewComponent>
    );
}

