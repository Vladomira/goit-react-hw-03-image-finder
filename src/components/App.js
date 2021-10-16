import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Searchbar from "./Searchbar";
import ImageGallery from "./ImgsList/ImageGallery";
import LoadMoreBtn from "./LoadMoreButton";
import LoaderForImg from "./Loader";
import Error from "./Error.js";
import imgAPI from "./services/FetchImgs";
import Modal from "./Modal";
import "./styles/Style.scss";

class App extends Component {
  state = {
    imgName: "",
    entriesImgs: null,
    page: 1,
    error: null,
    status: "idle",
    showModal: false,
    largeURL: "",
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imgName;
    const nextName = this.state.imgName;
    const { page } = this.state;
    //
    if (prevName !== nextName) {
      this.setState({ status: "pending" });

      imgAPI
        .FetchImgs(nextName, page)
        .then((entriesImgs) => {
          const data = entriesImgs.hits.map(
            ({ id, tags, webformatURL, largeImageURL }) => {
              return {
                id: id,
                webformatURL: webformatURL,
                tags: tags,
                largeImageURL: largeImageURL,
              };
            }
          );
          this.setState({ entriesImgs: data, status: "resolved" });
        })
        .catch((error) => this.setState({ error, status: "reject" }));
    }
    //
    if (prevProps.page !== page && page !== 1) {
      this.fetchImgNext(nextName, page);
    }
    if (prevProps.page && !prevProps.showModal) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }
  // getImgs = (imgName, pageNumber) => {
  //   FetchImgs(imgName, pageNumber)
  //     .then(({ hits }) => {
  //       this.setState({ entriesImgs: hits, status: "resolved" });
  //     })
  //     .catch(() => {
  //       if (!imgName) {
  //         this.setState({
  //           error: "Something went wrong, please. try again",
  //           status: "rejected",
  //         });
  //       }
  //     });
  // };

  handleFormSubmit = (imgName) => {
    this.setState({ imgName, page: 1 });
  };

  toggleModalWindow = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      // largeURL: url,
    }));
  };
  fetchImgNext = (imgName, pageIncrement) => {
    imgAPI.FetchImgs(imgName, pageIncrement).then(({ hits }) => {
      console.log(hits);
      // console.log(this.pageIncrement);
      this.setState((prevState) => ({
        entriesImgs: [...prevState.entriesImgs, ...hits],
      }));
    });
  };
  pageIncrement = ({ page }) => {
    this.setState({
      page: page + 1,
    });
  };

  render() {
    const { entriesImgs, error, status, showModal, largeURL } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {status === "resolved" && (
          <>
            <ImageGallery
              entriesImgs={entriesImgs}
              openModal={this.toggleModalWindow}
            />
            {status === "idle" && (
              <p className="header">Please, type the image name</p>
            )}

            {status === " rejected" && (
              <Error
                message={error.message}
                // `Some went wrong`
              />
            )}
            {status === "pending" && <LoaderForImg />}
            <LoadMoreBtn onClick={this.fetchImgNext}>
              <Loader
                type="Rings"
                color="#00BFFF"
                height={80}
                width={80}
                timeout={3000}
              />
            </LoadMoreBtn>
          </>
        )}
        {showModal && (
          <Modal onClose={this.toggleModalWindow}>
            <img src={largeURL} alt="" />
          </Modal>
        )}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
// if (response.total === 0) {
//   return console.log(`The picture ${nextName} isn't exist`);
// }
