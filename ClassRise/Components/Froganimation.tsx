// Importing necessary tools from React and React Native
import React, { useState, useEffect, useRef } from "react";
const [reverse, setReverse] = useState(false); // Track direction
import { Animated, StyleSheet, View, Text } from "react-native";

// How long the animation will take (1000 milliseconds = 1 second)
const ANIMATION_DURATION = 1000;

// The size of the half-circle path the image will follow
const RADIUS = 30;

// Duration for initial rotation
const INITIAL_ROTATION_DURATION = 500;

// Styles for the container and image
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start", // Align content to the top
    alignItems: "center", // Center horizontally
    paddingTop: 100, // Move the content 100 pixels down from the top
  },
  image: {
    width: 100, // Width of the image
    height: 100, // Height of the image
  },
});

// List of images to animate between
const IMAGES = [require("./frogg.png"), require("./frogjump.png")];

// The main component
const Froganimation = () => {
  // Create an animation value that starts at 0
  const animation = useRef(new Animated.Value(0)).current;

  // State to keep track of which image is currently shown
  const [imageIndex, setImageIndex] = useState(0);

  // This runs when the component is first created
  useEffect(() => {
    // Create an animation that goes from 0 to 1 in 1 second
    const loopedAnimation = Animated.timing(animation, {
      toValue: 1, // End value of the animation
      duration: ANIMATION_DURATION, // How long the animation takes
      useNativeDriver: true, // Makes the animation smoother
    });

    // Start the animation
    loopedAnimation.start();

    // Listen to changes in the animation value
    const listener = animation.addListener(({ value }) => {
      // Calculate which image to show based on the animation progress
      const newIndex = Math.floor(value * IMAGES.length) % IMAGES.length;
      setImageIndex(newIndex); // Update the image index
    });

    // Cleanup when the component is removed from the screen
    return () => {
      loopedAnimation.stop(); // Stop the animation
      animation.removeListener(listener); // Remove the listener
    };
  }, [animation]);

  // Get the current image to display
  const imageSource = IMAGES[imageIndex];

  // Calculate the X position for the half-circle movement
  const translateX = animation.interpolate({
    inputRange: [0, 1], // Animation goes from 0 to 1
    outputRange: [RADIUS, -RADIUS], // Move from right to left
  });

  // Calculate the Y position for the movement
  const translateY = animation.interpolate({
    inputRange: [0, 1], // Animation goes from 0 to 1
    outputRange: [0, RADIUS * 1.2], // Move down and then up
  });

  return (
    <View style={styles.container}>
      {/* The animated image */}
      <Animated.Image
        style={[
          styles.image,
          {
            // Apply the X and Y movements to the image
            transform: [{ translateX }, { translateY }],
          },
        ]}
        source={imageSource} // Set the current image
      />
    </View>
  );
};

// Export the component so it can be used in other files
export default Froganimation;
