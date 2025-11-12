import "./Exercise4.css";

import AlbumTiles from "../../components/AlbumTiles/AlbumTiles";

const Exercise4 = ({ albums }) => {
  const filteredAlbums = albums.filter((album) => album.strAlbumThumb);

  const highestRating = filteredAlbums.toSorted((a, b) => b.intScore - a.intScore);

  return (
    <section className="discography">
      <h2 className="discography__heading">E4 : Discography</h2>

      <div className="all-albums">
        <AlbumTiles title="Albums" albumsArr={filteredAlbums.slice(0, 9)} />
      </div>

      <div className="highest-rated">
        <AlbumTiles
          title="Highest Rated"
          albumsArr={highestRating.slice(0, 9)}
        />
      </div>
    </section>
  );
};

export default Exercise4;
