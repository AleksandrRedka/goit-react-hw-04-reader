import React from 'react';
import styles from './NotFound.module.css';

const NotFound = () => {
  return (
    <div>
      <h1 className={styles.notFoundTitle}>
        Sorry, pages not found{' '}
        <span className={styles.notFoundSmile} role='img' aria-label='emoji'>
          🤨
        </span>
      </h1>
    </div>
  );
};

export default NotFound;
