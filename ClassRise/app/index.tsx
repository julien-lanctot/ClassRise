
import React from "react";
import ButtonForm from "@/assets/components/ButtonForm";
import { Text, View, StyleSheet, Image } from "react-native";
import GenericButton from "@/assets/components/GenericButton";
import RadioButtonForm from "@/assets/components/RadioButtonForm";

export default function Index() {
  // This is a comment explaining stuff
  const onButtonClick = () => {
    console.log("I click a button");
    console.log("some more code");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#a7d7c5",
      }}
    >
      {/*<link rel="stylesheet" href="https://startr.style/style.css"></link>*/}
      <Text style={styles.title}>Welcome to ClassRise</Text>
      <Image source={require("@/app/mascot.png")} style={styles.mascot} />
      {/*<button>Big button</button>*/}
      {/*<GenericButton buttonText={"Big button"} onClick={onButtonClick} />*/}
      {/*<RadioButtonForm />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c786c",
    fontFamily: "serif",

  },

  mascot: {
    width: 150,
    height: 150,
    marginBottom: 20,
  }

});
