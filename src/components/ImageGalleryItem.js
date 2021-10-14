import PropTypes from 'prop-types';
//
function ImageGalleryItem({ webformatURL, id, alt }) {
  console.log(alt)
  return (
    <li className="ImageGalleryItem" key={id}>
      <img
        width="240"
        src={webformatURL}
        alt={alt}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}
ImageGalleryItem.propTypes ={
  webformatURL: PropTypes.string.isRequired, 
  id: PropTypes.number,
  alt: PropTypes.string,
}
export default ImageGalleryItem;
