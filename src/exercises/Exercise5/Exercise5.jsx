import "./Exercise5.css";
import Carousel from "../../components/Carousel/Carousel";
import Loading from "../../components/Loading/Loading";

const Exercise5 = ({ imagesArr }) => {
  return (
    <section className="gallery">
      <h2 className="gallery__heading">E5 : Gallery</h2>
      {imagesArr.length > 0 ? <Carousel imagesArr={imagesArr} /> : <Loading />}
    </section>
  );
};

export default Exercise5;
