import type { NextPage } from 'next'
import Head from 'next/head'
import Dashboard from '../components/Dashboard'
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col py-2">
      <Head>
        <title>nepex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dashboard/>
    </div>
  )
}

export default Home
