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
      <div className="bg-deepoe-cream">
      <div className="max-w-2xl mx-auto pb-2 ">
        <div className="w-full  overflow-hidden">
          <div className="relative h-60">
            <Image
              src={products.image.originalSrc}
              layout="fill"
              objectFit="cover"
            />
            
    </div>
  );
}

// export async function getStaticProps() {
//   const products = await getProductsInCollection('frontpage');

//   return {
//     props: { products },
//   };
// }
