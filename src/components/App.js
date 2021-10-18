import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
// import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Searchbar from "./SeacrhBar/Searchbar";
import ImageGallery from "./ImgsList/ImageGallery";
import LoadMoreBtn from "./LoadMoreBtn/LoadMoreBtn";
import LoaderForImg from "./Loader";
import Error from "./Error.js";
import imgAPI from "./services/FetchImgs";
import Modal from "./Modal/Modal";
import Container from "./Container/Container";
import "./styles/Style.scss";

class App extends Component {
  state = {
    imgName: "",
    entriesImgs: null,
    page: 1,
    error: null,
    status: "idle",
    showModal: false,
    largeImageURL: "",
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imgName;
    const nextName = this.state.imgName;
    const { page, showModal } = this.state;
    //
    if (prevName !== nextName) {
      this.setState({ status: "pending" });

      this.getImgFromFetch(nextName, page);
    }
    if (prevState.page !== page && page !== 1) {
      this.setState({ status: "pending" });
      this.getImgFromFetchOnBtn(nextName, page);
    }
  }
  getData = (data) => {
    return data.map(({ id, tags, webformatURL, largeImageURL }) => {
      return {
        id: id,
        webformatURL: webformatURL,
        tags: tags,
        largeImageURL: largeImageURL,
      };
    });
  };

  getImgFromFetch = (imgName, pageNumber) => {
    imgAPI
      .FetchImgs(imgName, pageNumber)
      .then(({ hits }) => {
        const data = this.getData(hits);
        this.setState({ entriesImgs: data, status: "resolved" });

        if (!hits.length) {
          alert("No such pictures, try again");
          this.setState({
            error: "Something went wrong, please. try again",
            status: "rejected",
          });
        } else this.setState({ error: null });
      })
      .catch((error) => this.setState({ error, status: "rejected" }));
  };
  getImgFromFetchOnBtn = (imgName, page) => {
    imgAPI
      .FetchImgs(imgName, page)
      .then(({ hits }) => {
        const data = this.getData(hits);
        this.setState((prev) => ({
          entriesImgs: [...prev.entriesImgs, ...data],
          status: "resolved",
        }));
        this.scroll();
      })
      .catch((error) => this.setState({ error, status: "reject" }));
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
    });
  };
  handleFormSubmit = (imgName) => {
    this.setState({ imgName, page: 1 });
  };

  toggleModalWindow = (prop) => {
    console.dir(prop);
    return this.setState(({ showModal }) => ({
      showModal: !showModal,
      largeImageURL: prop,
    }));
  };

  render() {
    const { entriesImgs, error, status, showModal, largeURL } = this.state;
    return (
      <Container className="container">
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === "idle" && (
          <p className="header">Please, type the image name</p>
        )}

        {status === "resolved" && (
          <>
            <ImageGallery
              entriesImgs={entriesImgs}
              openModal={this.toggleModalWindow}
            />
            {status === " rejected" && <Error message={error.message} />}
            {status === "pending" && <LoaderForImg />}
            <LoadMoreBtn onClick={this.pageIncrement}></LoadMoreBtn>
          </>
        )}
        {showModal && (
          <Modal onClose={this.toggleModalWindow}>
            <img src={largeURL} alt="" />
          </Modal>
        )}
        <ToastContainer autoClose={3000} />
      </Container>
    );
  }
}

export default App;
// if (response.total === 0) {
//   return console.log(`The picture ${nextName} isn't exist`);
// }

//
// if (prevProps.page !== page && page !== 1) {
//   this.fetchImgNext(nextName, page);
// }
// if (prevProps.page && !prevProps.showModal) {
//   window.scrollTo({
//     top: document.documentElement.scrollHeight,
//     behavior: "smooth",
//   });
// }
