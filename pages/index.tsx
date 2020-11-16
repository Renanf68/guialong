import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Call from '../components/Call'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guia Longevidade</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Hero />
      <Call />
      <Footer />
    </div>
  )
}
