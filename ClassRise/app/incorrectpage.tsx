import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function CorrectScreen() {

    const onButtonClick = () => {
        router.navigate("./questionpage", { relativeToDirectory: false });
    };

    return (
        <>
        <View style={styles.container}></View>
        <Text style={styles.correctText}> Incorrect... </Text>
        <TouchableOpacity style={styles.button} onPress={onButtonClick}>
        <Text style={styles.buttonText}>Next Question</Text>
        </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
//fill out here
    },

    correctText: {
// fill out here
    },

    button: {
// fill out here
    },

    buttonText: {
        // fill out here
            },
});