import React from 'react';
import styles from './Opening.module.css';

function Opening({ opening_crawl }) {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div className={styles.scrollText}>
          <p>{opening_crawl}</p>
        </div>
      </div>
    </div>
  );
}

export default Opening;
