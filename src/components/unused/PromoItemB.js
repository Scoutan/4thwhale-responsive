import Image from 'next/image'
import Link from 'next/link'
//import styles from '../../styles/PromoItemB.module.css'
import styles from '../../styles/GridPromoItemB.module.css'

export default function PromoItemB() {
  return (
    <div className={styles.contents}>
      <Image
        className={styles.backgroundImg}
        src="/Avocado-Ice-Cream.png"
        alt="Green ice cream"
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