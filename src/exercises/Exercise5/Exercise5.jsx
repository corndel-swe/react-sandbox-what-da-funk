import "./Exercise5.css";
import Loading from "../../components/Loading/Loading";

const Exercise5 = ({ imagesArr }) => {
  return (
    <section className="gallery">
      <h2 className="gallery__heading">E5 : Gallery</h2>
      {imagesArr.length > 0 ? <p>Carousel here please</p> : <Loading />}
    </section>
  );
};

export default Exercise5;
