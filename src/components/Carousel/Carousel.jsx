import leftArrow from "../../assets/images/left-arrow.png";
import rightArrow from "../../assets/images/right-arrow.png";
import "./Carousel.css";

const Carousel = ({ imagesArr }) => {
  return (
    <div className="carousel">
      <img
        src={leftArrow}
        alt="left arrow"
        onClick={undefined}
        className="carousel__arrow carousel__arrow--left"
      />
      <img src={imagesArr[0]} alt="" className="carousel__image" />
      <img
        src={rightArrow}
        alt="right arrow"
        onClick={undefined}
        className="carousel__arrow carousel__arrow--right"
      />
    </div>
  );
};

export default Carousel;
