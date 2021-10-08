import Image from 'next/image'
import styles from '../../styles/PromoItemA.module.css'

export default function PromoItemA() {
  return (
    <div className={styles.contents}>
      <Image
        className={styles.backgroundImg}
        src="/ubeicecream 1.svg"
        alt="Purple ice cream"
        layout="fill"
      />
      <a href="/">
        <div className={styles.button}>
          <span className={styles.typography}>
            Get it
          </span>
        </div>
      </a>
    </div>
  );
}