// import PropTypes from "prop-types";
import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class SpinLoader extends Component {
  render() {
    return (
      <Loader
        type="BallTriangle"
        color="#85309f"
        height={100}
        width={100}
        timeout={3000}
        style={{
          position: "fixed",
          top: "40%",
          left: "50%",
        }}
        // className="loader"
      />
    );
  }
}
export default SpinLoader;
