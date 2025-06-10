import React from 'react';
import { View } from 'react-native';
import CatchLog from '../CatchLog';

export default function FullLogScreen({ catches }) {
    return (
        <View style={{ padding: 10 }}>
            <CatchLog catches={catches} />
        </View>
    );
}
