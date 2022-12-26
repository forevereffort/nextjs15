import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BaseStyles from '../styles/Base.module.css'
import HeaderStyles from '../styles/Header.module.css'
import HomeStyles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>15five home</title>
        <meta name="description" content="15five home meta description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className={BaseStyles.container}>
          <div>
            <a href=""><Image src="/15-five-logo.svg" alt="15 five Logo" width={121} height={32} /></a>
          </div>
          <nav className={HeaderStyles.nav}>
            <ul>
              <li><a href="#">Why 15Five</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Resources</a></li>
              <li><a href="#">Company</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Home