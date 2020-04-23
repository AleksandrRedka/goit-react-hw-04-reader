import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListMovies from '../components/ListMovies/ListMovies';
import MoviesSearch from '../components/MoviesSearch/MoviesSearch';
import * as fetchAPI from '../components/services/filmAPI';

export default class MoviesPage extends Component {
  state = {
    searchMovie: '',
    moviesLinks: [],
  };

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
      state: PropTypes.shape({
        searchValue: PropTypes.string,
      }),
    }).isRequired,
  };

  handleChandleSearch = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmitForm = e => {
    const { searchMovie } = this.state;
    const { history, location } = this.props;
    e.preventDefault();
    fetchAPI.fetchFilmSearch(searchMovie).then(data => {
      const { results } = data;
      this.setState({ moviesLinks: [...results] });
    });
    history.push({
      path: location.pathname,
      search: `query=${searchMovie}`,
    });
  };

  render () {
    const { searchMovie, moviesLinks } = this.state;
    const { location } = this.props;
    return (
      <div>
        <MoviesSearch
          value={searchMovie}
          onChange={this.handleChandleSearch}
          onSubmit={this.handleSubmitForm}
        />
        {moviesLinks.length > 0 && (
          <ListMovies moviesLinks={moviesLinks} path={location.pathname} />
        )}
      </div>
    );
  }
}
