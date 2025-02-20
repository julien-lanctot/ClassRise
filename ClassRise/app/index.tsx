import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ImageBackground } from "react-native";
import { router } from "expo-router";

export default function Index() {
  // This is a comment explaining stuff
  const onButtonClick = () => {
    router.navigate("./questionpage", { relativeToDirectory: false });
  };

  return (
    <ImageBackground
    source={require("@/app/background.png")}
    style={styles.background}
    resizeMode="cover"
    
    >
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
      }}
    >
      {/*<link rel="stylesheet" href="https://startr.style/style.css"></link>*/}
      <Text style={styles.title}>Welcome to ClassRise</Text>
      <Image source={require("@/app/mascot.png")} style={styles.mascot} />
      <Text style={styles.subtitle}>
        Dive right into the amazing learning experience of ClassRise!
      </Text>

      <TouchableOpacity style={styles.button} onPress={onButtonClick}>
        <Text style={styles.buttonText}>Get Started</Text>
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

  title: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#2c786c",
    fontFamily: "serif",
  },

  mascot: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#2c786c",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },

  buttonText: {
    color: "##ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 16,
    color: "#2c786c",
    textAlign: "center",
    marginBottom: 30,
    marginHorizontal: 30,
  },
});
