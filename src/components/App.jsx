import React from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Modal } from "./Modal/Modal";
import { getData } from "./api";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { Toaster } from 'react-hot-toast';

class App extends React.Component {

  state = {
    query: '',
    page: 1,
    imagesList: [],
    isLoading: false,
    error: null,
    isEmpty: false,
    isVisiblBtn: false,
    ClickImage: null,
  }

  onClickImage = (selectedImageURL) => {
    this.setState({ClickImage: selectedImageURL})
  }

  componentDidUpdate(prevProprs, prevState){
    const {query, page} = this.state
    if(query !== prevState.query || prevState.page !== page){
      this.getImages(query, page)
    }
  }
  
  getImages = async(query, page) => {
    try {
      this.setState({isLoading: true})
      const { totalHits, hits } = await getData(query, page);
      if(hits.length === 0){
        this.setState({isEmpty: true})
        return
      }
      this.setState(prevState => ({
        imagesList: [...prevState.imagesList, ...hits], 
        isVisiblBtn: this.state.page < Math.ceil(totalHits / 12)}))
    }
    catch (error) {console.log(error)} finally {this.setState({isLoading: false})}
  }

  onCloseModal = () => {
    this.setState({ClickImage: null})
  }

  onLoadMore = () => {
    this.setState(prevState => ({page: prevState.page + 1}))
  }

  handleSubmit = query => {
    this.setState({
      query,     
      page: 1,
      showModal: false,
      imagesList: [],
      isLoading: false,
      error: null,
      isEmpty: false,
      isVisiblBtn: false})
  }

  render(){
    const {
    imagesList,
    isLoading,
    isEmpty,
    isVisiblBtn,
    ClickImage,
      
    } = this.state;
    return (
      <>
      <Searchbar onSubmit={this.handleSubmit}/>
      <Toaster />
      {isLoading && <Loader />}
      <ImageGallery imagesList={imagesList} onClick={this.onClickImage}/>
      {ClickImage && <Modal largeImageURL={ClickImage} modalClose={this.onCloseModal} />}
      {isEmpty && <h1>Sorry... There are not images</h1>}
      {isVisiblBtn && <Button onClick={this.onLoadMore}/>}
      </>
    )
  }

}

export {App}