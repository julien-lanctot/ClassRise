import Button1 from "@/assets/components/Button1";
import ButtonForm from "@/assets/components/ButtonForm";
import { Text, View } from "react-native";

export default function Index() {
  // This is a comment explaining stuff

  const onButtonClick = () => {
    console.log("I click a button");
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
      <Button1 buttonText={"Big button"} onClick={onButtonClick} />
      <ButtonForm buttonTexts={["first text"]} />
    </View>
  );
}
