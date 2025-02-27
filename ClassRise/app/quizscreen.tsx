import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground  } from "react-native";
import { router } from "expo-router";

 const onButtonClick = () => {
    router.navigate("./questionpage", { relativeToDirectory: false });
  };

const questions = [
{ text: "What grade are you in?", options: ["1st", "2nd", "3rd", "4th", "5th", "6th"] },
  { text: "Do you find it really hard to sit still or stop fidgeting, even when you're supposed to?", options: ["Yes", "Sometimes", "No"] },
  { text: "Do you get distracted easily, even when you're trying to pay attention?", options: ["Yes", "Sometimes", "No"] },
  { text: "Do you forget what you're supposed to do, even right after someone tells you?", options: ["Yes", "Sometimes", "No"] },
  { text: "Do you find reading really hard, even when you try your best?", options: ["Yes", "Sometimes", "No"] },
  { text: "Do you mix up letters like 'b' and 'd' or have trouble spelling words correctly?", options: ["Yes", "Sometimes", "No"] },
  { text: "Do you sometimes forget what you just read, even if you understood it while reading?", options: ["Yes", "Sometimes", "No"] },
  { text: "Do numbers feel confusing, or do they seem to move around when you look at them?", options: ["Yes", "Sometimes", "No"] },
  { text: "Is it hard to remember math facts, like 2 + 3 = 5?", options: ["Yes", "Sometimes", "No"] },
  { text: "Do you get mixed up when you try to add or subtract in your head?", options: ["Yes", "Sometimes", "No"] },
];

export default function QuizScreen() {
    const [index, setIndex] = useState(0);
    const handleNext = () => {
        if (index < questions.length - 1) {
            setIndex(index + 1);
        }
    };

return (

      <ImageBackground
        source={require("./quizpic.png")}
        style={styles.background}
        resizeMode="cover"
        
        >
        <View style={styles.container}>
        <Text style={styles.question}>{questions[index].text}</Text>
        {questions[index].options.map((option) => (
            <TouchableOpacity key={option} style={styles.button} onPress={handleNext}>
              <Text style={styles.buttonText}>{option}</Text>
              </TouchableOpacity>
      ))}

{index === questions.length - 1 && (
        <TouchableOpacity style={styles.finishButton} onPress={onButtonClick}>
          <Text style={styles.buttonText}>Finish the Quiz</Text>
        </TouchableOpacity>
      )}
      </View>

      </ImageBackground>
);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
    },

  question:{
        fontSize: 25,
        color: "#2c786c",
        textAlign: "center",
        marginBottom: 30,
        marginHorizontal: 30,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 10,
        fontWeight: "bold",

  },

  finishButton:{
    backgroundColor: "rgba(103, 202, 187, 0.85)",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 25,
    width: 150,
    marginVertical: 20,
  },

  button: {
    backgroundColor: "rgba(44, 120, 108, 0.85)",
    padding: 15,
    borderRadius: 8,
    width: 150,
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginVertical: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },

  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },

  
});