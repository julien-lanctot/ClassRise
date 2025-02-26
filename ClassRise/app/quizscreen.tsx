import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { router } from "expo-router";

 const onButtonClick = () => {
    router.navigate("./questionpage", { relativeToDirectory: false });
  };

const questions = [
{ text: "What grade are you in?", options: ["1st", "2nd", "3rd", "4th", "5th", "6th"] },
  { text: "Do you have trouble focusing?", options: ["Yes", "Sometimes", "No"] },
  { text: "Do you struggle with reading letters in order?", options: ["Yes", "Sometimes", "No"] },
  { text: "Do you forget instructions frequently?", options: ["Yes", "Sometimes", "No"] },
  { text: "Is reading aloud difficult for you?", options: ["Yes", "Sometimes", "No"] },
];

export default function QuizScreen() {
    const [index, setIndex] = useState(0);
    const handleNext = () => {
        if (index < questions.length - 1) {
            setIndex(index + 1);
        }
    };

return (
        <View style={styles.container}>
        <Text style={styles.question}>{questions[index].text}</Text>
        {questions[index].options.map((option) => (
            <TouchableOpacity key={option} style={styles.button} onPress={handleNext}>
              <Text style={styles.buttonText}>{option}</Text>
              </TouchableOpacity>
      ))}

{index === questions.length - 1 && (
        <TouchableOpacity style={styles.finishButton} onPress={onButtonClick}>
          <Text style={styles.buttonText}>Finish</Text>
        </TouchableOpacity>
      )}
      </View>

);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        backgroundColor: "#a8f7cc",
    },

  question:{
    color: "#3057c2",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,

  },

  finishButton:{
    backgroundColor: "rgba(44, 120, 108, 0.85)",
    paddingVertical: 20,
    paddingHorizontal: 35,
    borderRadius: 25,
  },

  button: {
    backgroundColor: "rgba(44, 120, 108, 0.85)",
    padding: 15,
    borderRadius: 8,
    width: 150,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 30,
  },

  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});