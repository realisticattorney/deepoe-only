import Head from 'next/head';
import { getProductsInCollection } from '../lib/shopify';
import ProductList 

export default function Home({ products }) {

  console.log(products);
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul>
        { products.map(({node}) => (
          <li>
            {node.title}
            </li>))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products},
  };
}
