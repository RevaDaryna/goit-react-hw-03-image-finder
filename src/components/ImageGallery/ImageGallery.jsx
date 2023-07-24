import React from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css'
import PropTypes from "prop-types";

const ImageGallery = ({imagesList, onClick}) => {
        return (
            <ul className={css.ImageGallery}>
                {imagesList.map(({id, webformatURL, largeImageURL, tags}) => {
                    return( <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL= {largeImageURL} onClick={onClick} tags={tags}/>)
                })}                
            </ul>
        )
}

ImageGallery.propTypes = {
    imagesList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
      })
    ).isRequired,
    onClick: PropTypes.func.isRequired
  };


export {ImageGallery}