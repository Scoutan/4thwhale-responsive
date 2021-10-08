import Image from 'next/image'
import styles from '../../styles/PromoItemB.module.css'

export default function PromoItemB() {
  return (
    <div className={styles.contents}>
      <Image
        className={styles.backgroundImg}
        src="/Avocado-Ice-Cream-4-1 1.svg"
        alt="Green ice cream"
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