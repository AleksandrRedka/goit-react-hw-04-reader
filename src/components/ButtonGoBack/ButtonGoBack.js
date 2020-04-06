import React from 'react';
import styles from './ButtonGoBack.module.css';

function ButtonGoBack ({ goBack }) {
  return (
    <div>
      <button type='button' className={styles.butonGoBack} onClick={goBack}>
        Go Back
      </button>
    </div>
  );
}

ButtonGoBack.propTypes = {};

export default ButtonGoBack;
