import React, { Component, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as fetchAPI from '../components/services/filmAPI';
import CardMovie from '../components/CardMovie/CardMovie';

const getIdFromProps = props => props.match.params.movieId;

const AsyncCast = lazy(() =>
  import('../components/Cast/Cast' /* webpackChunkName: "cast-list" */),
);

const AsyncReviews = lazy(() =>
  import(
    '../components/Reviews/Reviews' /* webpackChunkName: "reviews-list" */
  ),
);

const mapper = ({
  poster_path: poster,
  vote_average: rating,
  release_date: dateRelese,
  ...props
}) => ({
  poster,
  rating,
  dateRelese,
  ...props,
});

export default class MoviePage extends Component {
  state = {
    movieDetails: null,
  };

  static propTypes = {
    match: PropTypes.shape({
      path: PropTypes.string.isRequired,
    }).isRequired,
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      state: PropTypes.shape().isRequired,
    }).isRequired,
  };

  componentDidMount () {
    const id = getIdFromProps(this.props);
    fetchAPI
      .fetchFilmDetails(id)
      .then(movieDetails =>
        this.setState({ movieDetails: mapper(movieDetails) }),
      );
  }

  handleGoBack = () => {
    const { history, location } = this.props;
    if (location.state.prevPage) {
      history.push(location.state.prevPage);
    } else {
      history.push('/');
    }
  };

  render () {
    const { movieDetails } = this.state;
    const { match } = this.props;
    return (
      <div>
        {movieDetails !== null && (
          <CardMovie movieDetails={movieDetails} goBack={this.handleGoBack} />
        )}
        <Suspense>
          <Route path={`${match.path}/cast`} component={AsyncCast} />
          <Route path={`${match.path}/reviews`} component={AsyncReviews} />
        </Suspense>
      </div>
    );
  }
}
