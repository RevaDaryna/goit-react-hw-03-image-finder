import React from "react";
import css from './ImageGalleryItem.module.css'
import PropTypes from "prop-types";

const ImageGalleryItem = ({webformatURL, largeImageURL, onClick, tags}) => {
    return (
        <li className={css.ImageGalleryItem} onClick={() => {onClick(largeImageURL)}}>
           <img className={css.ImageGalleryItemImage} src={webformatURL} alt={tags} />
        </li>
    )
}

ImageGalleryItem.propTypes = {
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
  };

export {ImageGalleryItem}