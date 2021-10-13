import errorImage from "../errorImages/cats.jpg";
//
export default function ErrorImg({ message }) {
  return (
    <>
      <div>{message}</div>
      <div role="alert">
        <img src={errorImage} width="240" height="240" alt="cats" />
      </div>
    </>
  );
}
