import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

const JulienExamples = () => {
  // I have a variable with some text
  let questionText = "some text";
  const [stateQuestionText, setStateQuestionText] = useState(questionText);

  // This function changes the text
  // and then prints the new text in the console
  const changeText = () => {
<<<<<<< Updated upstream
    questionText = "other text";
=======
    setStateQuestionText("some other text");
>>>>>>> Stashed changes
    console.log(questionText);
  };

  // However, in the html, the text is not modified, WHY THOUGHT
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
        <Text style={styles.question}>{stateQuestionText}</Text>
        <button onClick={changeText}> Change the text </button>
      </View>
    </>
  );
};

export default JulienExamples;

const styles = StyleSheet.create({
  question: {
    fontSize: 16,
    color: "#2c786c",
    textAlign: "center",
    marginBottom: 30,
    marginHorizontal: 30,
  },
});
