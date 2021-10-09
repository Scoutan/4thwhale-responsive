import Head from 'next/head'
import PromoMain from '../components/PromoMain'
import PromoItemA from '../components/PromoItemA'
import PromoItemB from '../components/PromoItemB'
import PromoAbout from '../components/PromoAbout'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Responsive Layout Test</title>
        <meta name="description" content="Responsive Layout Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainFlexContainer}>
        <div className={styles.flexContentLeft}>
          <PromoMain
            topTen={"Top 10"}
            subject={"Hottest Flavours"}
            date={"Summer 2021"}
          />
        </div>
        <div className={styles.flexContentRight}>
          <div className={styles.subFlexContainer}>
            <PromoItemA />
            <PromoItemB />
          </div>
          <PromoAbout
            header="Our Ice Cream Philosophy"
            textA="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            textB="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </div>
      </main>
    </div>
  )
}
