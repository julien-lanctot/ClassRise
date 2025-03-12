import React from "react";
import { Text, View, TouchableOpacity, ImageBackground, Image, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function CorrectScreen() {
    const onButtonClick = () => {
        router.navigate("./questionpage", { relativeToDirectory: false });
    };

    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.correctText}>Correct!</Text>
                <Image
                    source={require("@/app/HappyFrog.png")}
                    style={styles.mascot}
                    resizeMode="contain" // Ensures the image scales properly
                />
                <TouchableOpacity style={styles.button} onPress={onButtonClick}>
                    <Text style={styles.buttonText}>Next Question</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#aaeda1", // New background color
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        alignItems: "center",
    },
    mascot: {
        width: 300, // Adjust the width as needed
        height: 300, // Adjust the height as needed
        marginBottom: 20, // Space between mascot and button
    },
    correctText: {
        fontSize: 35,
        color: "#026e02", // Dark green for better contrast
        textAlign: "center",
        marginBottom: -30, // Space between text and mascot
        fontWeight: "bold", // Make the text bold
    },
    button: {
        backgroundColor: "#95de95",
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
        alignItems: "center",
    },
    buttonText: {
        color: "#026e02",
        fontSize: 18,
        fontWeight: "bold",
    },
});