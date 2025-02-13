import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

type ButtonProps = {
    buttonText: string;
    onClick: () => void;
  };

export default function Index() {
    
    
    return (
        <>
        <Text style={styles.question}>
               1+1 = ?
              </Text>

        <input type="text" id="name" name="name" />
        <button> Submit Answer! </button>

        
        </>
    ) 
    
}

const styles = StyleSheet.create({
  question:{
    fontSize: 16,
    color: "#2c786c",
    textAlign: "center",
    marginBottom: 30,
    marginHorizontal: 30

  },

});