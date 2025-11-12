import "./Exercise1.css";
import sunrise from "../../assets/images/sunrise.png";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";

const Exercise1 = (props) => {
  const user = { firstName: "John", lastName: "Doe" };
  const currentHour = new Date().getHours();

  let greetingImg;
  let greetingTime;

  if (currentHour < 12) {
    greetingImg = sunrise;
    greetingTime = "Morning!";
  }

  return (
    <header className="greeting">
      <img src={sunrise} className="greeting__img" alt={""} />
      <h2 className="greeting__heading">
        E1 : Good {"Greeting Time Here"} <br /> {"firstName"} {"lastName"}
      </h2>
    </header>
  );
};

export default Exercise1;
