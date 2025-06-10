import React from 'react';
import { Text, View } from 'react-native';
import styles from './Header.styles';

export default function Header() {
    return (
        <View>
            <Text style={styles.title}>🎣 FishingSense</Text>
            <Text style={styles.subtitle}>Welcome to your fishing log!</Text>
        </View>
    );
}
