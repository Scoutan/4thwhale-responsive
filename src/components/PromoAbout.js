import Image from 'next/image'
import styles from '../../styles/PromoAbout.module.css'

export default function PromoAbout({ header, textA, textB }) {
  return (
    <div className={styles.contents}>
      <Image
        className={styles.backgroundImg}
        src="/moreicecream 1.svg"
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