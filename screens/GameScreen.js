import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randNum = Math.floor(Math.random() * (max - min)) + min;
    // if (randNum == exclude) {
    //     return generateRandomBetween(min, max, exclude);
    // } else {
    return randNum;
    // }
};


const GameScreen = props => {
    // like global variable
    const currentMin = useRef(1);
    const currentMax = useRef(100);

    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100)
    );

    const nextGuessHandler = direction => {

        if (direction === 'lower') {
            currentMax.current = currentGuess;
        } else
            if (direction === 'greater') {
                currentMin.current = currentGuess;
            }

        if (direction === 'greater' || direction === 'lower') {
            setCurrentGuess(generateRandomBetween(currentMin.current, currentMax.current));
        }


    }
    return (
        <View style={styles.screen}>
            <Text> Opponent's Guess   </Text>
            <NumberContainer> {currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="Lower" onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title="Greater" onPress={nextGuessHandler.bind(this, 'greater')} />
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: "80%"
    }
});

export default GameScreen;