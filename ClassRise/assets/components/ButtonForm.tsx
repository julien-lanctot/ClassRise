import { router } from "expo-router";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

type ButtonFormProps = {
  // Add what you need here in order to reuse this multiple time
  // Example : List of options text, colors of options
  buttonTexts: string[];
};

const ButtonForm = (props: ButtonFormProps) => {
  const { handleSubmit } = useForm();
  const [selectedButton, setSelectedButton] = useState(null);

  const buttons = ["Sec 1", "Sec 2", "Sec 3"];

  const handleSelect = (button: any) => {
    setSelectedButton(button);
  };

  const onSubmit = () => {
    console.log(selectedButton);
    if (selectedButton) {
      router.navigate("./newscreen", { relativeToDirectory: false });
    }
    console.log("you haven't selected an option");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {buttons.map((button, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelect(button)}
              style={{
                backgroundColor: selectedButton === button ? "blue" : "gray",
              }}
            >
              {button}
            </button>
          ))}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ButtonForm;
