import React from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';

const StartGameScreen = props => {
    return (

        <View style={styles.screen}>
            <Text style={styles.title}> Some text</Text>
            <Card style={styles.inputContainer}>
                <Text> Select a Number</Text>

                <Input
                    style={styles.input}
                    blureOnSubmit
                    autoCapitalize='none'
                    autoCorrrect={false}
                    keyboardType='number-pad'
                    maxLength={2} />

                <View style={styles.buttonContainer}>
                    <View style={styles.buttonView}>
                        <Button title="Reset" onPress={() => { }} color={Colors.accent} />
                    </View>
                    <View style={styles.buttonView}>
                        <Button title="Confirm" onPress={() => { }} color={Colors.primery} />
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
    },
    input: {
        width: 50,
        textAlign: 'center'
    }

});

export default StartGameScreen;