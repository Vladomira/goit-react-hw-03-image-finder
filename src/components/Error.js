import PropTypes from "prop-types";
import errorImage from "../errorImages/cats.jpg";

//
export default function Error({ message }) {
  return (
    <>
      {/* <div>{message}</div> */}
      <div role="alert">
        <img src={errorImage} width="240" height="240" alt="cats" />
        <p>{message}</p>
      </div>
    </>
  );
}
Error.propTypes = {
  message: PropTypes.string.isRequired,
};
