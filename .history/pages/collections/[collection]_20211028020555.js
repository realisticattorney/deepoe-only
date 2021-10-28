import Head from 'next/head';
import { getProductsInCollection } from '../lib/shopify';
import ProductList from '../components/ProductList';
import { useRouter } from 'next/router';

export default function Collection({ products }) {
  console.log(products);
  return (
    <div className="">
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {products.map(({ node }) => (
        
      ))} */}
      {/* <ProductList products={products} /> */}
    </div>
  );
}

export async function getStaticProps() {
//   const { asPath, pathname } = useRouter();
//   console.log('aspath', asPath); // '/blog/xyz'
//   console.log('path', pathname); // '/blog/[slug]'

  const products = await getProductsInCollection("frontpage");

  return {
    props: { products },
  };
}
