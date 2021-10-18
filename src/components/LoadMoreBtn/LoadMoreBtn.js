import PropTypes from "prop-types";

function LoadMoreBtn({ onClick }) {
  return (
    <button type="button" onClick={onClick} className="Button">
      Load more
    </button>
  );
}
LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default LoadMoreBtn;
