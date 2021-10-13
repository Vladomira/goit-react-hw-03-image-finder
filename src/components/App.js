import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";

class App extends Component {
  state = {
    imgName: "",
  };

  handleFormSubmit = (imgName) => {
    this.setState({ imgName });
    // console.log(imgName, "data");
  };
  render() {
    // const { data, loading } = this.state;
    return (
      <div>
        <h1>Hello</h1>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGallery inputInfo={this.state.imgName} />
        <ToastContainer />
        {/* <Button> <Modal> */}
      </div>
    );
  }
}

export default App;

////
//  {/* {loading && <h1>Loading...</h1>} */}
//       {/* {data && (
//           <div>
//             {data.hits.map((el) => {
//               return (
//                 <img
//                   src={el.webformatURL}
//                   alt=""
//                   key={el.id}
//                   style={{ width: 200, height: 200}}
//                 ></img>
//               );
//               // return el.webformatURL;
//             })}
//           </div>
//         )} */}
//       {/* </div> */}
