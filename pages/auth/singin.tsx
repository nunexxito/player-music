import Head from "next/head";
import Image from "next/image";
import { getProviders, signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Loader from "../../components/Loader";

export default function Singin({providers}) {
    const {data: session} = useSession();
    const router = useRouter();

    useEffect(() =>{
        if(session) {
            router.push('/')
        }
    },[session]);

    if(session) return <Loader/>

    return(
        <div className="bg-black h-screen flex flex-col items-center pt-40 space-y-8">
            <Head>
                <title>Login | NEPEX</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Image src='/img/NEPEX.png' height={145} width={530} objectFit='contain' className='animate-pulse logo'/>
            {Object.values(providers).map(provider => (
                <div key={provider.name}>
                    <button
                    className="text-white py-4 px-6 rounded-full gold transition duration-300 ease-out border border-transparent uppercase font-bold text-xs md:text-base tracking-wider hover:scale-105"
                    onClick={()=> signIn(provider.id)}>
                        Login in nepex with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    );
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
      props: { providers },
    };
  }