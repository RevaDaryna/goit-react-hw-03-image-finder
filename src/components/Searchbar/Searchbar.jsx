import React from "react";
import PropTypes from "prop-types";
import css from './Searchbar.module.css'
import {ReactComponent as SearchIcon} from '../icons/icons.svg'
import toast from 'react-hot-toast';

class Searchbar extends React.Component {

    state = {
        query: ''
    }

    handleSubmit = evt => {
        evt.preventDefault();
        if(this.state.query.trim() === '') {
          return toast.error('Enter a request')
        }
        this.props.onSubmit(this.state.query.trim());
        this.setState({
            query: ''
        });
      };

    handleChange = evt => {
        this.setState({ query: evt.target.value });
      };

    render() {
        return (
            <>
            <header className={css.Searchbar}>
              <form className={css.SearchForm} onSubmit={this.handleSubmit}>
                <button type="submit" className={css.SearchFormButton}>
                  <span className="button-label"><SearchIcon /></span>
                </button>
            
                <input
                  className={css.SearchFormInput}
                  value={this.state.query}
                  onChange={this.handleChange}
                  type="text"
                  autoComplete="off"
                  autoFocus
                  placeholder="Search images and photos"
                />
              </form>
            </header>
            </>
        )
    }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export {Searchbar}