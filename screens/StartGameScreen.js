import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

import Card from '../components/Card';
import Color from '../constants/colors';

const StartGameScreen = props => {
    return (

        <View style={styles.screen}>
            <Text style={styles.title}> Some text</Text>
            <Card style={styles.inputContainer}>
                <Text> Select a Number</Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonView}>
                        <Button title="Reset" onPress={() => { }} color={Color.accent} />
                    </View>
                    <View style={styles.buttonView}>
                        <Button title="Confirm" onPress={() => { }} color={Color.primery} />
                    </View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    buttonView: {
        width: 80
    }
});

export default StartGameScreen;