import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styles from './ListMovies.module.css';

const ListMovies = ({ moviesLinks, match }) => (
  <ul className={styles.ListMovies}>
    {moviesLinks.map(movie => (
      <li key={movie.id} className={styles.link}>
        <Link to={`movies/${movie.id}`}>{`${movie.title}`}</Link>
      </li>
    ))}
  </ul>
);

ListMovies.propTypes = {
  moviesLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(ListMovies);
