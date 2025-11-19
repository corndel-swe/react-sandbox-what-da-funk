import "./Exercise5.css";
import Loading from "../../components/Loading/Loading";
import Carousel from "../../components/Carousel/Carousel";

const Exercise5 = ({ imagesArr }) => {
  return (
    <section className="gallery">
      <h2 className="gallery__heading">E5 : Gallery</h2>
      {imagesArr.length > 0 ? <Carousel imagesArr={imagesArr} /> : <Loading />}
    </section>
  );
};

export default Exercise5;
