'use client'

import styles from './Opening.module.css';
import { useEffect } from 'react';


function Opening({ opening_crawl }) {
  useEffect(() => {
    const scrollText = document.getElementById('scrollText');

    function handleAnimationEnd() {
      scrollText.style.animation = 'none';
      scrollText.offsetHeight; // Truco para forzar el reseteo de la animación
      scrollText.style.animation = 'scroll 220s linear forwards';
    }

    scrollText.addEventListener('animationiteration', handleAnimationEnd);

    return () => {
      scrollText.removeEventListener('animationiteration', handleAnimationEnd);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.scrollText} id="scrollText">
          <p>{opening_crawl}</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>{opening_crawl}</p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>{opening_crawl}</p>
        </div>
      </div>
    </div>
  );
}

export default Opening;
