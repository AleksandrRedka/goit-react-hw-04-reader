import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';
import styles from './MoviesSearch.module.css';

const generateId = () => shortId.generate();

const MoviesSearch = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={styles.formSearch}>
      <label htmlFor={generateId()} className={styles.label}>
        <input
          name='searchMovie'
          value={value}
          onChange={onChange}
          placeholder='Enter please movie name'
          autoComplete='off'
        />
      </label>
      <button type='submit'>Search</button>
    </form>
  );
};

MoviesSearch.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default MoviesSearch;
