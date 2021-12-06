import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.ViewOneStyle} />
            <View style={styles.ViewTwoStyle} />
            <View style={styles.ViewThreeStyle} />
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'red',
        height: 400,
        justifyContent: 'space-between'
    },
    viewOneStyle: {
        height: 50,
        width: 50,
        borderWidth: 2,
        borderColor: 'red',
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        height: 50,
        width: 50,
        borderWidth: 1,
        borderColor: 'blue',
        backgroundColor: 'blue'
    },
    viewThreeStyle: {
        height: 50,
        width: 50,
        borderWidth: 1,
        borderColor: 'green',
        backgroundColor: 'green'
    }
});

export default BoxScreen;