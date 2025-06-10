import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: 300,
        borderRadius: 10,
        marginBottom: 20,
    },
});
