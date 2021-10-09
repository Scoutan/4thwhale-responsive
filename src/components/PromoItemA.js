import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/PromoItemA.module.css'

export default function PromoItemA() {
  return (
    <div className={styles.contents}>
      <Image
        className={styles.backgroundImg}
        src="/ubeicecream.png"
        alt="Purple ice cream"
        layout="fill"
      />
      <Link href="/">
        <a>
          <div className={styles.button}>
            <span className={styles.typography}>
              Get it
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
}