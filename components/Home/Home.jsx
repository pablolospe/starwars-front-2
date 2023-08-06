import React from 'react';
import styles from './Home.module.css';
import HomeText from './HomeText';

function HomeComp() {
  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div className={styles.scrollText}>
          <HomeText />
          <br />
          <br />
          <br />
          <br />
          <br />
          <HomeText />
        </div>
      </div>
    </div>
  );
}

export default HomeComp;
