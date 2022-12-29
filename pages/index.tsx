import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import VideoCTA from '../components/VideoCTA'

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>15five home</title>
        <meta name="description" content="15five home meta description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <VideoCTA/>
    </>
  )
}

export default Home
