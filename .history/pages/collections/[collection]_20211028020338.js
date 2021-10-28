import Head from 'next/head';
import { getProductsInCollection } from '../lib/shopify';
import ProductList from '../components/ProductList';
import { useRouter } from 'next/router';

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




export async function getStaticProps(context) {
   const { asPath, pathname } = useRouter();
  console.log(asPath); // '/blog/xyz'
  console.log(pathname); // '/blog/[slug]'

  const products = await getProductsInCollection();

  return {
    props: { products },
  };
}
