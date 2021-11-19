import Head from 'next/head';
import { getProductsInCollection } from '../lib/shopify';
import ProductList from '../components/ProductList';
import Image from 'next/image';
export default function Home() {
  // console.log(products);
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Image className="" src="/images/deepoeHome.jpg" layout="fill" />
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
