import "./Button.css";

const Button = ({ isSecondary, buttonText, isInverted, inCaps }) => {
  let buttonStyles = ["button"];

  if (!isSecondary) {
    buttonStyles.push("primary");
  } else {
     buttonStyles.push("secondary");
  }

  if(isInverted){
     buttonStyles.push("inverted");
  }

  return <button className={buttonStyles.join(" ")}>{inCaps ? buttonText.toUpperCase() : buttonText}</button>;
};

export default Button;
