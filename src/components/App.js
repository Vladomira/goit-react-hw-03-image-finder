import React, { Component } from "react";
// import { ToastContainer } from "react-toastify";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Searchbar from "./SeacrhBar/Searchbar";
import ImageGallery from "./ImgsList/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import SpinLoader from "./Loader/Loader";
import Error from "./Error/Error.js";
import FetchImgs from "./services/FetchImgs";
import Modal from "./Modal/Modal";
import Container from "./Container/Container";
import "./styles/Style.scss";

//
class App extends Component {
  state = {
    total: [],
    imgName: "",
    entriesImgs: [],
    page: 1,
    error: "",
    status: "idle",
    showModal: false,
    largeImageURL: "",
    forLoadMore: false,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imgName;
    const nextName = this.state.imgName;
    const { page } = this.state;
    //
    if (prevName !== nextName) {
      this.setState({ entriesImgs: [], page: 1, status: "pending" });

      this.getImgFromFetch(nextName, page);
    }
    if (prevState.page !== page && page !== 1) {
      this.getImgFromFetch(nextName, page);
    }
  }

  getImgFromFetch = (imgName, pageNumber) => {
    FetchImgs(imgName, pageNumber)
      .then((entriesImgs) => {
        if (!entriesImgs.hits.length) {
          alert("No such pictures, try again");
          this.setState({
            error: "Something went wrong, please try again",
            status: "rejected",
          });
        } else {
          const data = entriesImgs.hits.map(
            ({ id, tags, webformatURL, largeImageURL }) => {
              return {
                id,
                webformatURL,
                tags,
                largeImageURL,
              };
            }
          );
          this.setState((prevState) => ({
            entriesImgs: [...prevState.entriesImgs, ...data],
            status: "resolved",
            forLoadMore: true,
          }));
        }

        this.scroll();
      })
      .catch((error) =>
        this.setState({
          error,
          status: "rejected",
        })
      );
  };

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  pageIncrement = () => {
    return this.setState({
      page: this.state.page + 1,
      status: "pending",
    });
  };
  handleFormSubmit = (imgName) => {
    this.setState({ imgName, page: 1 });
  };

  toggleModalWindow = (prop) => {
    return this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: prop,
    }));
  };

  render() {
    const {
      entriesImgs,
      error,
      status,
      showModal,
      largeImageURL,
      forLoadMore,
    } = this.state;
    return (
      <Container className="container">
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === "idle" && (
          <p className="header">Please, type the image name</p>
        )}
        {status === "pending" && (
          <>
            <ImageGallery
              entriesImgs={entriesImgs}
              openModal={this.toggleModalWindow}
            />
            <SpinLoader />
          </>
        )}

        {status === " rejected" && <Error message={error} />}
        {status === "resolved" && (
          <>
            <ImageGallery
              entriesImgs={entriesImgs}
              openModal={this.toggleModalWindow}
            />
            {forLoadMore && <LoadMoreBtn onClick={this.pageIncrement} />}
          </>
        )}
        {showModal && (
          <Modal onClose={this.toggleModalWindow} img={largeImageURL} />
        )}
        {/* <ToastContainer autoClose={3000} /> */}
      </Container>
    );
  }
}

export default App;
// getImgFromFetchOnBtn = (imgName, page) => {
//   imgAPI
//     .FetchImgs(imgName, page)
//     .then(({ hits }) => {
//       const data = this.getData(hits);
//       this.setState((prev) => ({
//         entriesImgs: [...prev.entriesImgs, ...data],
//         status: "resolved",
//       }));
//       this.scroll();
//     })
//     .catch((error) => this.setState({ error, status: "reject" }));
// };
