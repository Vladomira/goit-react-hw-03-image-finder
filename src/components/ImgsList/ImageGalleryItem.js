import PropTypes from "prop-types";
//
function ImageGalleryItem({ webformatURL, largeImageURL, id, alt }) {
  // console.log(alt)
  return (
    <li className="ImageGalleryItem">
      <img
        key={id}
        width="240"
        src={webformatURL}
        alt={alt}
        largeurl={largeImageURL}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}
// ImageGalleryItem.propTypes = {
//   webformatURL: PropTypes.string.isRequired,
//   id: PropTypes.number,
//   alt: PropTypes.string,
// };
export default ImageGalleryItem;
