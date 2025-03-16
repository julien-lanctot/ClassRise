import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground  } from "react-native";
import { router } from "expo-router";

 const onButtonClick = () => {
    router.navigate("./questionpage", { relativeToDirectory: false });
  };

const questions = [

  { text: "Do you find reading really hard, even when you try your best?", options: ["Yes", "Sometimes", "No"],category: "dyslexia" },
  { text: "Do you mix up letters like 'b' and 'd' or have trouble spelling words correctly?", options: ["Yes", "Sometimes", "No"],category: "dyslexia" },
  { text: "Do you sometimes forget what you just read, even if you understood it while reading?", options: ["Yes", "Sometimes", "No"],category: "dyslexia" },
  { text: "Do numbers feel confusing, or do they seem to move around when you look at them?", options: ["Yes", "Sometimes", "No"],category: "dyscalculia" },
  { text: "Is it hard to remember math facts, like 2 + 3 = 5?", options: ["Yes", "Sometimes", "No"],category: "dyscalculia" },
  { text: "Do you get mixed up when you try to add or subtract in your head?", options: ["Yes", "Sometimes", "No"],category: "dyscalculia" },
{ text: "Do you have trouble sounding out new words?", options: ["Yes", "Sometimes", "No"], category: "dyslexia" },
{ text: "Do you find it hard to remember the sounds letters make?", options: ["Yes", "Sometimes", "No"], category: "dyslexia" },
{ text: "Do you skip words or lose your place when reading?", options: ["Yes", "Sometimes", "No"], category: "dyslexia" },
{ text: "Do you have trouble writing your thoughts down clearly?", options: ["Yes", "Sometimes", "No"], category: "dyslexia" },
{ text: "Do you find it easier to understand stories when you hear them rather than read them?", options: ["Yes", "Sometimes", "No"], category: "dyslexia" },
{ text: "Do you find rhyming words difficult?", options: ["Yes", "Sometimes", "No"], category: "dyslexia" },
{ text: "Do you struggle with remembering how words are spelled?", options: ["Yes", "Sometimes", "No"], category: "dyslexia" },
{ text: "Do you have trouble understanding place value (like knowing that 50 is bigger than 5)?", options: ["Yes", "Sometimes", "No"], category: "dyscalculia" },
{ text: "Do you find it hard to recognize patterns in numbers?", options: ["Yes", "Sometimes", "No"], category: "dyscalculia" },
{ text: "Do you mix up numbers like 6 and 9 or 3 and 8?", options: ["Yes", "Sometimes", "No"], category: "dyscalculia" },
{ text: "Do you struggle to read a clock with hands?", options: ["Yes", "Sometimes", "No"], category: "dyscalculia" },
{ text: "Do you have trouble understanding word problems in math?", options: ["Yes", "Sometimes", "No"], category: "dyscalculia" },
{ text: "Do you find it hard to remember multiplication tables?", options: ["Yes", "Sometimes", "No"], category: "dyscalculia" },
{ text: "Do you struggle to count backward or subtract numbers?", options: ["Yes", "Sometimes", "No"], category: "dyscalculia" },
{ text: "Do you get confused when using money or making change?", options: ["Yes", "Sometimes", "No"], category: "dyscalculia" },
{ text: "Do you find it hard to estimate how long something will take?", options: ["Yes", "Sometimes", "No"], category: "dyscalculia" },

];

export default function QuizScreen() {
    const [index, setIndex] = useState(0);

    const [responses, setResponses] = useState<{ [key: string]: number }>({
        dyslexia: 0,
        dyscalculia: 0,
      });
    
    const handleNext = (option: string, category: string) => {
        if (category !== "general") {
            setResponses((prev) => ({
              ...prev,
              [category]: prev[category] + (option === "Yes" ? 2 : option === "Sometimes" ? 1 : 0),
            }));
          }

          if (index < questions.length - 1) {
            setIndex(index + 1);
          } else { router.push({ pathname: "./resultsquiz", params: responses });
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
            <TouchableOpacity key={option} style={styles.button} onPress={() => handleNext(option, questions[index].category)}>
              <Text style={styles.buttonText}>{option}</Text>
              </TouchableOpacity>
      ))}

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