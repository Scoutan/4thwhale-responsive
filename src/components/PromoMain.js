import { useState, useEffect } from 'react'
import Image from 'next/image'
//import styles from '../../styles/PromoMain.module.css'
import styles from '../../styles/GridPromoMain.module.css'

export default function PromoMain({ topTen, subject, date }) {
  const [imgSrc, setImgSrc] = useState('/icecream.png');

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 1295) {
        setImgSrc('/icecream_wide.png');
      } else {
        setImgSrc('/icecream.png');
      }
    })
  })

  return (
    <div className={styles.contents}>
      <Image
        className={styles.backgroundImg}
        src={imgSrc}
        alt="Tall ice cream"
        layout="fill"
      />
      <div className={styles.textFrame}>
        <div className={styles.typography}>
          <div className={styles.topText}>
            <span className={styles.topTen}>
              {topTen}&nbsp;
            </span>
            <span className={styles.subject}>
              {subject}
            </span>
          </div>
          <div className={styles.bottomText}>
            <div>{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}