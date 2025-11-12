import Carousel from "../../components/Carousel/Carousel";
import "./AlbumGallery.css";

import NotFound from "../../components/NotFound/NotFound";

const AlbumGallery = (props) => {
  const { albumsArr, title } = props;

  if (albumsArr.length === 0) {
    return <NotFound />;
  }

  const imagesArr = albumsArr
    .filter((album) => album.strAlbumThumb)
    .map((album) => album.strAlbumThumb);

  return (
    <section className="album-gallery">
      <h1 className="album-gallery__heading">{title}</h1>

      <div className="album-gallery__carousel">
        <Carousel imagesArr={imagesArr} />
      </div>
    </section>
  );
};

export default AlbumGallery;
