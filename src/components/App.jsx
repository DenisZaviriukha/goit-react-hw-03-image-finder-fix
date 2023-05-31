import { Component } from "react";
import { GlobalStyle } from "./Global.styles";
import { Layout } from "./Layout/Layout.styled";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { fetchData } from "api";
import { Loader } from "./Loader";
export class App extends Component {

  state = {
    imagesArray: [],
    currentPage: 1,
    searchValue: "",
    loading: false
  }

  handleSearch = (textCall) => {
    this.setState({ searchValue: textCall, currentPage: 1, imagesArray: []})
  }

arrayOfImages = () => {
  const { searchValue, currentPage } = this.state;
  fetchData(searchValue, currentPage)
    .then((array) => {
      if (currentPage === 1) {
        this.setState({
          imagesArray: array,
          loading: false
        });
      } else {
        this.setState((prevState) => ({
          imagesArray: [...prevState.imagesArray, ...array],
          loading: false
        }));
      }
    })
    .catch((error) => {
      console.error(error);
      this.setState({ loading: false })
    });
};
  updateImagesArray = (array) => {

    if (this.state.currentPage === 1) {
      this.setState({
        imagesArray: array
      });

    }
  };
  
  spinStar = () => { 
    this.setState(
   {
      loading: true
    })
  } 

  spinStop = () => { 
     this.setState(
    {
      loading: false
    })
  }

  nextPage = () => {
  const nextPage = this.state.currentPage + 1;
  this.setState(
    {
      currentPage: nextPage,
      loading: true
    },
    () => {
      this.arrayOfImages();
    }
  );
};

  render() {
    return (
      <Layout>
        <Searchbar onSearch={this.handleSearch}
          addImages={this.updateImagesArray}
          currentPage={this.state.currentPage}
          searchValue={this.state.searchValue}
          spinnerStarts={this.spinStar}
          spinnerFinishes={this.spinStop} />
        {this.state.loading && <Loader />}
        <ImageGallery imagesToRender={this.state.imagesArray} />
        <Button onClick={this.handleCameraButtonClick} array={this.state.imagesArray} nextPage={this.nextPage} />
        
        <GlobalStyle />
      </Layout>
    );
  }
}
