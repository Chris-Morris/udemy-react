import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend 1', age: 32, key: '1'},
        {name: 'Friend 2', age: 32, key: '2'},
        {name: 'Friend 3', age: 32, key: '3'},
        {name: 'Friend 4', age: 32, key: '4'},
        {name: 'Friend 5', age: 32, key: '5'},
        {name: 'Friend 6', age: 32, key: '6'},
        {name: 'Friend 7', age: 32, key: '7'}
    ]

    return (
        <FlatList 
            data={friends} 
            renderItem={({ item }) => {
                return <Text style={styles.textStyle} key={item.key}>{item.name} is {item.age} years old</Text>
            }}
        />
    )
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;