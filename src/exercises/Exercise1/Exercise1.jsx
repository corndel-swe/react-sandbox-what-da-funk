import "./Exercise1.css";
import sunrise from "../../assets/images/sunrise.png";
import sun from "../../assets/images/sun.png";
import moon from "../../assets/images/moon.png";

const Exercise1 = (props) => {
  const user = { firstName: "Charlie", lastName: "Richardson" };
  const currentHour = new Date().getHours();

  let greetingImg;
  let greetingTime;

  if (currentHour < 12) {
    greetingImg = sunrise;
    greetingTime = "Morning!";
  } else if (currentHour < 18) {
    greetingImg = sun;
    greetingTime = "Afternoon!";
  } else {
    greetingImg = moon;
    greetingTime = "Evening!";
  }

  return (
    <header className="greeting">
      <img src={greetingImg} className="greeting__img" alt={greetingTime} />
      <h2 className="greeting__heading">
        E1 : Good {greetingTime} <br /> {user.firstName} {user.lastName}
      </h2>
    </header>
  );
};

export default Exercise1;
