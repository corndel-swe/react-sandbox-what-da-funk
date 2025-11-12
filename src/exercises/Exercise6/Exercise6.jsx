import "./Exercise6.css";
import ExploreAlbums from "../../components/ExploreAlbums/ExploreAlbums";

const Exercise6 = ({ albumsArr }) => {
  return (
    <section className="explore">
      <h2 className="explore__heading">E6 : Explore</h2>
      <ExploreAlbums albumsArr={albumsArr} />
    </section>
  );
};

export default Exercise6;
