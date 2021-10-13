import ImageGalleryItem from "./ImageGalleryItem.js";
import defaultImg from "../errorImages/cat.jpg";

//
export default function LoaderForImg() {
  const webformatURL = defaultImg;
  return (
    <div>
      <ImageGalleryItem webformatURL={webformatURL} />
      <p>Loading...</p>
    </div>
  );
}
