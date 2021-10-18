import PropTypes from "prop-types";
//
function ImageGalleryItem({ webformatURL, largeImageURL, alt }) {
  // console.log(alt)
  return (
    <li className="ImageGalleryItem">
      <img
        width="240"
        src={webformatURL}
        alt={alt}
        largeurl={largeImageURL}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
export default ImageGalleryItem;
