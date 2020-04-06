import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListReviews.module.css';

function ListReviews ({ reviews }) {
  return (
    <ul className={styles.ListReviews}>
      {reviews.map(review => (
        <li key={review.id}>
          <h4 className={styles.author}>{review.author}</h4>
          <p className={styles.text}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}

ListReviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ListReviews;
