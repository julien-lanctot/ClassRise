import { router } from "expo-router";
import React, { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

type RadioButtonFormProps = {
  // Add what you need here in order to reuse this multiple time
  // What is needed for all similar pages?
};

const RadioButtonForm = (props: RadioButtonFormProps) => {
  const { handleSubmit } = useForm();
  const [selectedOption, setSelectedOption] = useState(null);

  const form = useForm({
    defaultValues: {
      selectedOption: "Sec 1",
    },
    mode: "onChange",
  });
  const { register } = form;

  const buttons = ["Sec 1", "Sec 2", "Sec 3"];

  const onSubmit = () => {
    if (selectedOption) {
      router.navigate("./newscreen", { relativeToDirectory: false });
    }
    console.log("you haven't selected an option");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {buttons.map((button, index) => (
          <label>
            <div>
              <input
                key={index}
                type="radio"
                value={button}
                {...register("selectedOption")}
              ></input>
              {button}
            </div>
          </label>
        ))}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default RadioButtonForm;
