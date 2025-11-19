import "./Home.css";

import AlbumTiles from "../../components/AlbumTiles/AlbumTiles";
import Carousel from "../../components/Carousel/Carousel";
import ExploreAlbums from "../../components/ExploreAlbums/ExploreAlbums";
import Exercise1 from "../../exercises/Exercise1/Exercise1";
import Exercise2 from "../../exercises/Exercise2/Exercise2";
import Exercise3 from "../../exercises/Exercise3/Exercise3";
import Exercise4 from "../../exercises/Exercise4/Exercise4";
import Exercise5 from "../../exercises/Exercise5/Exercise5";
import Exercise6 from "../../exercises/Exercise6/Exercise6";
import { useEffect, useState } from "react";

import { mockApiFetch } from "../../services/mockApi";

const Home = (props) => {
  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    mockApiFetch("/artist.json")
      .then((result) => setArtist(result))
      .catch((err) => setError(err.message));
  }, []);

  useEffect(() => {
    mockApiFetch("/albums.json")
      .then((result) => setAlbums(result))
      .catch((err) => setError(err.message));
  }, []);

  const galleryImages = [];

  if (artist) {
    galleryImages.push(artist.strArtistFanart);
    galleryImages.push(artist.strArtistFanart2);
    galleryImages.push(artist.strArtistFanart3);
    galleryImages.push(artist.strArtistFanart4);
  }

  return (
    <>
      <div className="home">
        <Exercise1 />

        <Exercise2 />

        <Exercise3 artist={null} />

        <Exercise4 albums={[]} />

        <Exercise5 imagesArr={[]} />

        <Exercise6 albumsArr={[]} />
      </div>
    </>
  );
};

export default Home;
