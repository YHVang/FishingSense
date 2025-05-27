import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

export default function App() {
    const handleTestPress = () => {
        Alert.alert('🎣 FishingSense', 'Fake catch detected!');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>🎣 FishingSense</Text>
            <Text style={styles.subtitle}>Welcome to your fishing log!</Text>
            <Button title="Simulate Catch" onPress={handleTestPress} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1f5fe',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
    },
});
