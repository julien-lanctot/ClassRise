{/*changes here*/}

import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function CorrectScreen() {

    const onButtonClick = () => {
        router.navigate("./questionpage", { relativeToDirectory: false });
    };

    return (
        <>
        <View style={styles.container}>
        <Text style={styles.question}> Incorrect... </Text>
        <TouchableOpacity style={styles.button} onPress={onButtonClick}>
        <Text style={styles.buttonText}>Next Question</Text>
        </TouchableOpacity>
        </View>
        </>
    );
}


const styles = StyleSheet.create({
    question:{
      fontSize: 24,
      color: "#2c786c",
      textAlign: "center",
      marginBottom: 30,
      marginHorizontal: 30
  
    },
  
    input: {
      width: "80%",
      height: 50,
      borderColor: "#2c786c",
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 15,
      fontSize: 18,
      textAlign: "center",
      marginBottom: 20,
    },
  
    button: {
      backgroundColor: "#2c786c",
      paddingVertical: 12,
      paddingHorizontal: 30,
      borderRadius: 10,
      alignItems: "center",
    },
  
    buttonText: {
      color: "#ffffff",
      fontSize: 18,
      fontWeight: "bold",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#d45353",
    }
  
  });