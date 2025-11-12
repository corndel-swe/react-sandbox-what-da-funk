import "./Exercise4.css";

import AlbumTiles from "../../components/AlbumTiles/AlbumTiles";

const Exercise4 = ({ albums }) => {


  return (
    <section className="discography">
      <h2 className="discography__heading">E4 : Discography</h2>

      <div className="all-albums">
        <AlbumTiles title="Albums" albumsArr={albums} />
      </div>

      <div className="highest-rated">
        <AlbumTiles
          title="Highest Rated"
          albumsArr={albums}
        />
      </div>
    </section>
  );
};

export default Exercise4;
