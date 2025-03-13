import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { router } from "expo-router";

const onButtonClick = () => {
    router.navigate("./questionpage", { relativeToDirectory: false });
  };

const sections = [
    {
        section: 1,
        unit: 1,
        title: "Foundations of Math",
        levels: [
            { id: 1, title: "Counting and Number Recognition", completed: false },
            { id: 2, title: "Basic Addition", completed: false },
            { id: 3, title: "Basic Subtraction", completed: false },
        ],
    },

    {
        section: 1,
        unit: 2,
        title: "Operations and Computation",
        levels: [
            { id: 4, title: "Multiplication", completed: false },
            { id: 5, title: "Division", completed: false },
            {  id: 6, title: "Fractions", completed: false },
    ],
},

{
    section: 2,
    unit: 1,
    title: "Advanced Arithmetic and Algebra",
    levels: [
        { id: 7, title: "Decimals", completed: false },
        { id: 8, title: "Percentages", completed: false },
        { id: 9, title: "Ratios and Proportions", completed: false },
        { id: 10, title: "Algebra Basics", completed: false },
    ],
},

{
    section: 2,
    unit: 2,
    title: "Geometry and Measurement",
    levels: [
        { id: 11, title: "Geometry Basics", completed: false },
      { id: 12, title: "Triangles and Polygons", completed: false },
      { id: 13, title: "Measurement and Units", completed: false },

    ],
},
];

export default function MathLevelsScreen() {
    const [progress, setProgress] = useState(sections);

    const handleLessonComplete = (sectionIndex: number, unitIndex: number, levelId: number) => {
        setProgress((prev) =>
            prev.map((section, sIdx) =>
                sIdx === sectionIndex
          ? {
            ...section,
            levels: section.levels.map((level) =>
              level.id === levelId ? { ...level, completed: true } : level
        ),
    }

    : section

)
);
};

return (
<ImageBackground
    source={require("./water.png")}
    style={styles.background}
    resizeMode="cover"
    
    >

    <ScrollView contentContainerStyle={styles.container}>
{progress.map((section, sectionIndex) => (
    <View key={section.section} style={styles.sectionContainer}>
       <Text style={styles.sectionHeader}>Section {section.section}: {section.title}</Text> 
       {section.levels.map((level, unitIndex) => (
        <View key={level.id} style={styles.levelWrapper}>
        <TouchableOpacity    
            style={[styles.levelCircle, level.completed ? styles.completed : styles.locked]}> 
            {level.completed ? <Text style={styles.checkmark}>✔</Text> : <Text style={styles.lockedText}>➤</Text>}
            </TouchableOpacity>
            <Text style={styles.levelText}>{level.title}</Text>
            </View>
          ))}
        </View>

        
      ))}

<TouchableOpacity style={styles.startButton} onPress={onButtonClick}>
<Text style={styles.startButtonText}>START</Text>
      </TouchableOpacity>
    </ScrollView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({

    background: {
        flex: 1,
        width: "100%",
        height: "100%",
        position: "absolute",
      },

    container: 
    { alignItems: "center", 
        padding: 20,
        flexGrow: 1 
    },
    sectionContainer: {
         
    width: "100%", 
    marginBottom: 20 
},
    sectionHeader: { 
        fontSize: 18, 
        fontWeight: "bold", 
        color: "#2c786c", 
        marginBottom: 10, 
        textAlign: "center" },


    levelWrapper: {
        alignItems: "center", 
        marginBottom: 10 
    
    },


    levelCircle: { 
        width: 100, 
        height: 100, 
        borderRadius: 100, 
        justifyContent: "center", 
        alignItems: "center", 
        marginVertical: 10 },

    completed: { 
        backgroundColor: "#4CAF50" 
    
    },

    locked: { 
        backgroundColor: "rgba(44, 120, 108, 1)"
    
    },
    
    checkmark: { 
        
        fontSize: 24, 
        color: "white" 
    },


    lockedText: { 
        fontSize: 24, 
        color: "white" 
    },

    levelText: { 
        marginTop: 8, 
        fontSize: 16, 
        fontWeight: "bold" 
    },

    startButton: { 
        backgroundColor: "#4CAF50", 
        paddingVertical: 15, 
        paddingHorizontal: 30, 
        borderRadius: 10, 
        marginTop: 20 
    },


    startButtonText: { 
        fontSize: 18, 
        fontWeight: "bold", 
        color: "white" 
    },

});
