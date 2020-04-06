import React from 'react';
import PropTypes from 'prop-types';
import CardMovieInfo from '../CardMovieInfo/CardMovieInfo';
import styles from './CardMovie.module.css';
import ButtonGoBack from '../ButtonGoBack/ButtonGoBack';

function CardMovie ({ movieDetails, goBack }) {
  const {
    id,
    title,
    poster,
    overview,
    genres,
    rating,
    dateRelese,
  } = movieDetails;

  const getYear = date => date.slice(0, 4);

  return (
    <>
      <ButtonGoBack goBack={goBack} />
      <div key={id} className={styles.movieCard}>
        <div className={styles.movieImg}>
          <img
            src={`https://image.tmdb.org/t/p/original${poster}`}
            alt={title}
          />
        </div>
        <div className={styles.movieDescription}>
          <h1>
            {title} ({getYear(dateRelese)})
          </h1>
          <p>User Score: {rating}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul className={styles.movieGenres}>
            {genres.map(item => (
              <li key={item.id}>
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <CardMovieInfo />
    </>
  );
}

CardMovie.propTypes = {
  movieDetails: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ).isRequired,
    rating: PropTypes.number.isRequired,
    dateRelese: PropTypes.string.isRequired,
  }).isRequired,
  goBack: PropTypes.func.isRequired,
};

export default CardMovie;
