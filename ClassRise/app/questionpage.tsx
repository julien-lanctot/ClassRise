import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import { router } from "expo-router";
import { useRouter } from "expo-router";
import { useEffect } from "react";
//changes here


{/*type ButtonProps = {
    buttonText: string;
    onClick: () => void;
  };*/}


//changes here
const questions = [
    { question: "What is 1 + 1?", answer: "2" },
    { question: "What is 3 × 3?", answer: "9" },
    { question: "What is 10 ÷ 2?", answer: "5" },
    { question: "What is 7 - 4?", answer: "3" },
    { question: "What is 6 + 7?", answer: "13" },
];

export default function Index() {
//changes here
const router = useRouter();
const [currentQuestion, setCurrentQuestion] = useState(questions[Math.floor(Math.random() * questions.length)]);
const [answer, setAnswer] = useState("");

const pickNewQuestion = () => {
    const newQuestion = questions[Math.floor(Math.random() * questions.length)];
    setCurrentQuestion(newQuestion);
    setAnswer("");
};
//changes here

      const onButtonClick = (isCorrect: boolean) => {
        if (isCorrect) {
            pickNewQuestion();
            router.navigate("./correctpage", { relativeToDirectory: false });
        } 
        else {
            router.navigate("./incorrectpage", { relativeToDirectory: false });
        }
//changes here
    
      };

    return (
        <>

        <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#a7d7c5",
              }}
            >

            
        <Text style={styles.question}>
        {currentQuestion ? currentQuestion.question : "Loading..."}
              </Text>
{/*changes here*/}
        <TextInput id="name" style={styles.input} placeholder="Type your answer" keyboardType="numeric" value={answer} onChangeText={setAnswer}/>
        <TouchableOpacity style={styles.button} onPress={() => onButtonClick(answer.trim() === currentQuestion?.answer)}>
            <Text style={styles.buttonText}>Check Answer!</Text>
        </TouchableOpacity>

{/*changes here*/}

        </View>
        
        </>
    ) 
    
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

});