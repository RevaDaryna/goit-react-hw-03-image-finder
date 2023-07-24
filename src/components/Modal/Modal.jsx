import React from "react";
import css from './Modal.module.css'
import PropTypes from "prop-types";

class Modal extends React.Component{

  componentDidMount() {
    window.addEventListener('keydown', this.closeModal)
  }
  componentWillUnmount() {
      window.removeEventListener('keydown', this.closeModal)
  }

  closeModal = e => {
      if (e.target === e.currentTarget || e.code === 'Escape') {
          this.props.modalClose();
      }
  }

  render(){
    return ( 
    <div className={css.Overlay} onClick={this.closeModal}>
       <div className={css.Modal}>
         <img src={this.props.largeImageURL} alt="" />
       </div>
    </div>)
  }
}

Modal.propTypes = {
  modalClose: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired 
}

export {Modal}