type ButtonFormProps = {
  // Add what you need here in order to reuse this multiple time
  // Example : List of options text, colors of options
  buttonTexts: string[];
};

const ButtonForm = (props: ButtonFormProps) => {
  return (
    <>
      <div className="group vertical">
        <button className="white">{props.buttonTexts[0]}</button>
        <button className="grey">Button</button>
        <button className="green">Button</button>
      </div>
    </>
  );
};

export default ButtonForm;
