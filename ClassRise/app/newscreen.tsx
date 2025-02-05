import { router } from "expo-router";
import { Text, View } from "react-native";

const NewScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to ClassRise</Text>
      <button
        onClick={() => {
          router.navigate("./home", { relativeToDirectory: false });
        }}
      >
        Go back
      </button>
    </View>
  );
};

export default NewScreen;
