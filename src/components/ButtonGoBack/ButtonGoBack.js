import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
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

ButtonGoBack.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default withRouter(ButtonGoBack);
