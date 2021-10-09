import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../../styles/PromoMain.module.css'

export default function PromoMain({ topTen, subject, date }) {
  const [imgSrc, setImgSrc] = useState('/icecream 1.png');

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 375) {
        setImgSrc('/icecream_wide.png');
      } else {
        setImgSrc('/icecream 1.png');
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
          <div className={styles.top}>
            <span className={styles.flexItemLeft}>
              {topTen}
            </span>
            &nbsp;
            <span className={styles.flexItemRight}>
              {subject}
            </span>
          </div>
          <div className={styles.bottom}>
            <div>{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
}