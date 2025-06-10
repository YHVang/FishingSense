import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './CatchLog.styles';

export default function CatchLog({ catches }) {
    if (catches.length === 0) {
        return <Text style={styles.empty}>No catches yet!</Text>;
    }

    return (
        <FlatList
            style={styles.log}
            data={catches}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
                <View style={styles.item}>
                    <Text>🎣 Catch #{index + 1}</Text>
                    <Text>🕒 {item.timestamp}</Text>
                    <Text>📍 Lat: {item.latitude.toFixed(5)}</Text>
                    <Text>📍 Lng: {item.longitude.toFixed(5)}</Text>
                </View>
            )}
        />
    );
}
