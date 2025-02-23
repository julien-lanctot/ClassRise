{/*changes here*/}

import React from "react";
import { Text, View, TouchableOpacity, ImageBackground, Image, StyleSheet } from "react-native";
import { router } from "expo-router";



export default function CorrectScreen() {

    const onButtonClick = () => {
        router.navigate("./questionpage", { relativeToDirectory: false });
    };

    return (
     <ImageBackground
     style={styles.question} 

    >    
        <View style={styles.question}>
        <Image source={require("@/app/mascot.png")} style={styles.question} />
        <Text style={styles.question}> Correct... </Text>
        <TouchableOpacity style={styles.button} onPress={onButtonClick}>
        <Text style={styles.buttonText}>Next Question</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
 background: {
        flex: 1,
        width: "100%",
        height: "100%",
  },
  question:{
    fontSize: 24,
    color: "##95de95",
    textAlign: "center",
    marginBottom: 30,
    marginHorizontal: 30

  },

  input: {
    width: "80%",
    height: 50,
    borderColor: "#95de95",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },

  mascot: {
    width: 250,
    height: 250,
    marginBottom: 20,
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
 
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#38fc38",
}
});