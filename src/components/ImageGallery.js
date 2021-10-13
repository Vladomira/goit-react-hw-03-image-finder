// import Prop-Types from 'prop-types';
import React, { Component } from "react";
import ErrorImg from "./ErrorImg.js";
import ImageGalleryItem from "./ImageGalleryItem.js";
import LoaderForImg from "./Loader";
import FetchImgs from "./services/FetchImgs";

//
class ImageGallery extends Component {
  state = {
    entriesImgs: null,
    error: null,
    status: "idle",
  };
  componentDidUpdate(prevProps, nextStaet) {
    const prevName = prevProps.inputInfo;
    const nextName = this.props.inputInfo;

    if (prevName !== nextName) {
      this.setState({ status: "pending" });

      FetchImgs(nextName)
        .then((entriesImgs) =>
          this.setState({ entriesImgs, status: "resolved" })
        )
        .catch((error) => this.setState({ error, status: "rejected" }));
    }
  }

  render() {
    const { entriesImgs, status } = this.state;

    if (status === "idle") {
      return <p>Please, type the image name</p>;
    }
    if (status === "pending") {
      return <LoaderForImg />;
    }
    if (status === "rejected") {
      return (
        <ErrorImg message={`{error.message}. Please type the correctly name`} />
      );
    }
    if (status === "resolved") {
      return (
        <ul>
          {entriesImgs.hits.map((el) => {
            return (
              <ImageGalleryItem
                webformatURL={el.webformatURL}
                id={el.id}
                key={el.id}
                alt={el.tags}
              />
            );
          })}
        </ul>
      );
    }
  }
}
export default ImageGallery;

// ===========
// <img
//   src={el.webformatURL}
//   // src={el["webformatURL"]}
//   alt=""
//   key={el.id}
//   style={{ width: 240, height: 240 }}
// ></img>
// return (
//   <div>
//     {error && (
//       <h1>
//         Sorry, it isn't exist. {error.message}. Please type the correctly
//         name
//       </h1>
//     )}
//     {loading && <p>Loading...</p>}
//     {!inputInfo && <p>Please, type the image name</p>}
//     {entriesImgs && (
//       <div>
//         {entriesImgs.hits.map((el) => {
//           return (
//             <img
//               src={el.webformatURL}
//               // src={el["webformatURL"]}
//               alt=""
//               key={el.id}
//               style={{ width: 240, height: 240 }}
//             ></img>
//           );
//         })}
//       </div>
//     )}
//   </div>
// );
// ++++++++++++++++++
// {/* <p>{inputInfo}</p> */}
//       {/* <ul className="ImageGallery">
//         <ImageGalleryItem />
//       </ul> */}
////
// console.log("prev:", prevProps.inputInfo);
// console.log("current:", this.props.inputInfo);
// console.log("changed input");
