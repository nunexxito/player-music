import type { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Dashboard from '../components/Dashboard'
import Loader from '../components/Loader'
// import Image from 'next/image'

const Home: NextPage = () => {
  const router = useRouter();
  const {status, data: session} = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/auth/singin');
    }
  });

  if(status === "loading") return <Loader/>
  
  return (
    <div className="flex min-h-screen flex-col py-2">
      <Head>
        <title>NEPEX</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Dashboard/>
    </div>
  )
}

export default Home
