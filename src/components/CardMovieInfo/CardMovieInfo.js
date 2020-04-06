import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
// import PropTypes, { shape } from 'prop-types';
import styles from './CardMovieInfo.module.css';

const CardMovieInfo = ({ match }) => {
  return (
    <div className={styles.movieInfo}>
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to={`${match.url}/cast`} className={styles.movieInfoLink}>
            Cast
          </Link>
        </li>
        <li>
          <Link to={`${match.url}/reviews`} className={styles.movieInfoLink}>
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};

CardMovieInfo.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(CardMovieInfo);
