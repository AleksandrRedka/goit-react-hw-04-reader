import React from 'react';
import PropTypes from 'prop-types';
import styles from './Actors.module.css';

function Actors ({ cast }) {
  return (
    <ul className={styles.list}>
      {cast.map(actor => {
        return (
          actor.photoActor && (
            <li key={actor.id} className={styles.cardActor}>
              <div className={styles.cardActorImg}>
                <img
                  src={`https://image.tmdb.org/t/p/original${actor.photoActor}`}
                  alt={actor.name}
                />
              </div>
              <div className={styles.cardActorInfo}>
                <p className={styles.character}>Role: {actor.character}</p>
                <p className={styles.actor}>Actor: {actor.name}</p>
              </div>
            </li>
          )
        );
      })}
    </ul>
  );
}

Actors.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      photoActor: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Actors;
