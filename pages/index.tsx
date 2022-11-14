import Head from 'next/head'
import Link from 'next/link'
import { setSyntheticLeadingComments } from 'typescript'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>

    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas" />
    </Head>

    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem Ipsum bla bla bla ...</p>
      <p className={styles.text}>Lorem Ipsum bla bla bla ...</p>
      <Link href="/ninjas">
        <p className={styles.btn}>See Ninja Listing</p>
      </Link>
    </div>


    </> 
  )
}
