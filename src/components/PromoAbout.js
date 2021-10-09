import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from '../../styles/PromoAbout.module.css'

export default function PromoAbout({ header, textA, textB }) {
  const [imgSrc, setImgSrc] = useState('/moreicecream 1.png');

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 375) {
        setImgSrc('/moreicecream_taller.png');
      } else {
        setImgSrc('/moreicecream 1.png');
      }
    })
  })

  return (
    <div className={styles.contents}>
      <Image
        className={styles.backgroundImg}
        src={imgSrc}
        alt="Ice Cream Cones"
        layout="fill"
      />
      <div className={styles.textFrame}>
        <p className={styles.header}>
          {header}
        </p>
        <p className={styles.textBlock}>
          {textA}
        </p>
        <p className={styles.textBlock}>
          {textB}
        </p>
      </div>
    </div>
  );
}