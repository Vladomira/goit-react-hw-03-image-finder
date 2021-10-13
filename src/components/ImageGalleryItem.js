function ImageGalleryItem({ webformatURL, id, alt }) {
  return (
    <li className="ImageGalleryItem" key={id}>
      <img
        // width="240"
        src={webformatURL}
        alt={alt}
        className="ImageGalleryItem-image"
      />
    </li>
  );
}
export default ImageGalleryItem;
