import ButtonForm from "@/assets/components/ButtonForm";
import { Text, View } from "react-native";
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
      }}
    >
      <link rel="stylesheet" href="https://startr.style/style.css"></link>
      <Text>Welcome to ClassRise</Text>
      <button>Big button</button>
      <GenericButton buttonText={"Big button"} onClick={onButtonClick} />
      <RadioButtonForm />
    </View>
  );
}
