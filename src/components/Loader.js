import ImageGalleryItem from "./ImgsList/ImageGalleryItem";
import defaultImg from "../errorImages/cat.jpg";
import Loader from "react-loader-spinner";
//
export default function LoaderForImg() {
  const webformatURL = defaultImg;
  return (
    <div>
      <ImageGalleryItem webformatURL={webformatURL} />
      <Loader
        type="Rings"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000}
      />
      <p className="loading__text">Loading...</p>
    </div>
  );
}
