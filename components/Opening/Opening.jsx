'use client'

// import React from 'react';
import styles from './Opening.module.css';

// function Opening({ opening_crawl }) {
//   return (
//     <div className={styles.body}>
//       <div className={styles.wrapper}>
//         <div className={styles.scrollText} id="scrollText">
//           <p>{opening_crawl}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Opening;

import React, { useEffect } from 'react';
// import styles from './Home.module.css';

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
    <div className={styles.body}>
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
