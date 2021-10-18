import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem";
// import FetchImgs from "./services/FetchImgs";

function ImageGallery({ entriesImgs, openModal }) {
  return (
    <div>
      <ul
        className="ImageGallery"
        onClick={(e) => openModal(e.target.dataset.source)}
      >
        {entriesImgs.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              id={id}
              webformatURL={webformatURL}
              alt={tags}
              largeImageURL={largeImageURL}
            />
          );
        })}
      </ul>
    </div>
  );
}

ImageGallery.propTypes = {
  entriesImgs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
  // openModal: PropTypes.func.isRequired,
};
export default ImageGallery;
