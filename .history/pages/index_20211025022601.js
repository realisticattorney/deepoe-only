import Head from 'next/head';
import { stringify } from 'postcss';
import { getProductsInCollection } from '../lib/shopify';

export default function Home({ products }) {

  console.log(products);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        { products.map(product => (
          <div className="flex flex-col items-center justify-center min-h-screen py-2">
            {product.title}
            </div>))}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products},
  };
}
