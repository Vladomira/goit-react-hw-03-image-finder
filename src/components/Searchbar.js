import { toast } from "react-toastify";
import React, { Component } from "react";
class Searchbar extends Component {
  state = {
    imgName: "",
  };
  handleChange = (e) => {
    // const { name, value } = e.currentTarget;
    // this.setState({ [name]: value.toLowerCase() });
    this.setState({ imgName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { imgName } = this.state;
    // console.log(imgName, "imgN");
    if (imgName.trim() === " ") {
      // alert("Please, type what do you want to see.");
      toast("Please, type what do you want to see.");
      return;
    }
    this.props.onSubmit(imgName); // отпарвка данных

    this.setState({ imgName: "" }); // очищение формы
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.handleChange}
            name="imgName"
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
