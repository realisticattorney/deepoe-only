import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="absolute w-full min-h-screen h-full top-0 left-0">
       
        </div>
    </div>
  );
}

// export async function getStaticProps() {
//   const products = await getProductsInCollection('frontpage');

//   return {
//     props: { products },
//   };
// }
