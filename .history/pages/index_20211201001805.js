import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home({ products }) {
  console.log(products);
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {products.map(({ node }) => (
        
      ))} */}
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection('frontpage');

  return {
    props: { products },
  };
}