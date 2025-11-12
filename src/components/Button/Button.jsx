import "./Button.css";

const Button = ({ isSecondary }) => {
  let buttonStyles = ["button"];

  if (!isSecondary) {
    buttonStyles.push("primary");
  } else {
  }

  return <button className={buttonStyles.join(" ")}>Button Text</button>;
};

export default Button;
