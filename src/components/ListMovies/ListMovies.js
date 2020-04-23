import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styles from './ListMovies.module.css';

const ListMovies = ({ moviesLinks, path }) => {
  return (
    <ul className={styles.ListMovies}>
      {moviesLinks.map(movie => (
        <li key={movie.id} className={styles.link}>
          <Link
            to={{
              pathname: `movies/${movie.id}`,
              state: { prevPage: path },
            }}
          >{`${movie.title}`}</Link>
        </li>
      ))}
    </ul>
  );
};

ListMovies.propTypes = {
  moviesLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  path: PropTypes.string.isRequired,
};

export default withRouter(ListMovies);
