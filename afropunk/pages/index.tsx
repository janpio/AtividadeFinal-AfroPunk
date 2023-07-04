import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Header from './components/header'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>AfroPunk</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <Footer />
      </main>
    </>
  )
}
