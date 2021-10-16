import PropTypes from "prop-types";
import ImageGalleryItem from "./ImageGalleryItem";
// import FetchImgs from "./services/FetchImgs";

function ImageGallery({ entriesImgs, openModal }) {
  return (
    <>
      <ul>
        <li className="ImageGalleryItem">
          {entriesImgs.map(({ id, webformatURL, largeImageURL, tags }) => {
            return (
              <ImageGalleryItem
                key={id}
                id={id}
                webformatURL={webformatURL}
                alt={tags}
                onClick={openModal}
                largeImageURL={largeImageURL}
              />
            );
          })}
        </li>
      </ul>
    </>
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
  openModal: PropTypes.func.isRequired,
};
export default ImageGallery;
