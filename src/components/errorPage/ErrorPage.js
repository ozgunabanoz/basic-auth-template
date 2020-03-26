import React from 'react';

import styles from './ErrorPage.module.css';

const ErrorPage = props => {
  return (
    <div className={styles['main-div']}>
      <div className={styles['card']}>
        Oooops! I guess the page you're looking for doesn't exist
      </div>
    </div>
  );
};

export default ErrorPage;
