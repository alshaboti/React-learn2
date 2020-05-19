import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const Card = props => {
    return (
        // to merge styles from argu
        <View style={{ ...styles.card, ...props.style }}>
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        // only for ios
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        // for android
        elevation: 5,
        padding: 10,
        borderRadius: 5




    }

});
export default Card;