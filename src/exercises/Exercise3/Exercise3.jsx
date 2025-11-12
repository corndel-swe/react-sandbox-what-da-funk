import "./Exercise3.css";

import ArtistTile from "../../components/ArtistTile/ArtistTile";
import Loading from "../../components/Loading/Loading";

const Exercise3 = ({ artist }) => {
  if (!artist) {
    return (
      <section className="discover">
        <h2>E3 : Discover</h2>
        <Loading />
      </section>
    );
  }

  return (
    <section className="discover">
      <h2>E3 : Discover</h2>
      <ArtistTile
        imgSrc={artist.strArtistThumb}
        title={artist.strArtist}
        text={artist.strBiographyEN}
      />
    </section>
  );
};

export default Exercise3;
