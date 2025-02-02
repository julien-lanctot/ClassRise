type ButtonProps = {
  buttonText: string;
  onClick: () => void;
};

const Button1 = (props: ButtonProps) => {
  return (
    
      <button onClick={props.onClick}>{props.buttonText}</button>
   
  );
};

export default Button1;
