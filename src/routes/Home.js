import React, { Component } from 'react';
import HeaderTitle from '../components/HeaderTitle/HeaderTitle';
import ListMovies from '../components/ListMovies/ListMovies';
import * as fetchAPI from '../components/services/filmAPI';

export default class HomePage extends Component {
  state = {
    moviesLinks: [],
  };

  componentDidMount () {
    fetchAPI.fetchTrendingFilms().then(data => {
      const { results } = data;
      this.setState({ moviesLinks: [...results] });
    });
  }

  render () {
    const { moviesLinks } = this.state;
    return (
      <div>
        <HeaderTitle title='Trending today' />
        <ListMovies moviesLinks={moviesLinks} />
      </div>
    );
  }
}
