import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}


export async function getStaticProps() {

  const products = await f
  
  
  return {
    props: {
      name: 'John Doe',
    },
  }
}