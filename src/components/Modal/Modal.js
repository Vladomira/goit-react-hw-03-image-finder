import PropTypes from "prop-types";
import React, { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  static defaultProps = {
    onClose: PropTypes.func.isRequired,
  };
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDownESC);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDownESC);
  }
  handleKeyDownESC = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };
  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };
  render() {
    const { img } = this.props;
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={img} alt="" />
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
