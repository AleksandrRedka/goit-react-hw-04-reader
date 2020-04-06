import React, { Component } from 'react';
import Paragraph from '../Paragraph/Paragraph';
import * as fetchAPI from '../services/filmAPI';
import ListReviews from '../ListReviews/ListReviews';

const getIdFromProps = props => props.match.params.movieId;

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount () {
    const id = getIdFromProps(this.props);
    fetchAPI.fetchFilmReviews(id).then(data => {
      this.setState({
        reviews: data.results,
      });
    });
  }

  render () {
    const { reviews } = this.state;
    return (
      <div>
        {reviews.length > 0 ? (
          <ListReviews reviews={reviews} />
        ) : (
          <Paragraph text="We don't have any reviews for this movie" />
        )}
      </div>
    );
  }
}
