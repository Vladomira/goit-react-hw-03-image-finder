import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem";
// import FetchImgs from "./services/FetchImgs";

function ImageGallery({ entriesImgs, largeURL, openModal }) {
  return (
    <>
      <ul>
        {entriesImgs.hits.map(({ id, webformatURL, largeImageURL, tags }) => {
          return (
            <ImageGalleryItem
              key={id}
              id={id}
              webformatURL={webformatURL}
              alt={tags}
              onClick={openModal}
              largeURL={largeImageURL}
            />
          );
        })}
      </ul>
    </>
  );
}

ImageGallery.propTypes = {
  // entriesImgs: PropTypes.shape({
  //   id: PropTypes.number.isRequired,
  //   webformatURL: PropTypes.number.isRequired,
  //   tags: PropTypes.string.isRequired,
  // }),
  // openModal: PropTypes.func.isRequired,
};
export default ImageGallery;
