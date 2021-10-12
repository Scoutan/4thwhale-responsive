import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/GridPromoItem.module.css'

export default function PromoItem({ imgSrc, imgAlt, bgColor }) {
  return (
    <div className={styles.contents}>
      <Image
        className={styles.backgroundImg}
        src={imgSrc}
        alt={imgAlt}
        layout="fill"
      />
      <Link href="/">
        <a>
          <div className={styles.button} style={{ background: "" + bgColor }}>
            <span className={styles.typography}>
              Get it
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
}