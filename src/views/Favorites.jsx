import {useContext} from "react";
import {GalleryContext} from "../context/GalleryContext";


const Favorites = () => {
  const {photos, setPhotos} = useContext(GalleryContext);

  const removeFavorite = (id) => {
    const newPhotos = photos.map((photo) => {
      if (photo.id == id) {
        return {
          ...photo,
          liked: !photo.liked,
        };
      }
      return photo;
    });
    setPhotos(newPhotos);
  };

  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {photos
        .filter((photo) => photo.liked)
        .map((photo, i) => (
          <img
          key={i}
          src={photo.src.tiny}
          onClick={() => removeFavorite(photo.id)}
          />
        ))}
      </div>
    </div>
  );
};
export default Favorites;
