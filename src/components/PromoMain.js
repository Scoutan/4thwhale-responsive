import Image from 'next/image'
import styles from '../../styles/PromoMain.module.css'

export default function PromoMain({ topTen, subject, date }) {
  return (
    <div className={styles.contents}>
      <Image
        className={styles.backgroundImg}
        src="/icecream 1.jpg"
        alt="Tall ice cream"
        layout="fill"
      />
      <div className={styles.textFrame}>
        <div className={styles.typography}>
          <div className={styles.top}>
            <span className={styles.flexItemLeft}>
              {topTen}
            </span>
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