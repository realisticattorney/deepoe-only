import Head from 'next/head';
import { getCollections, getProductsInCollection } from '../../lib/shopify';
import ProductList from '../../components/ProductList';
import { useRouter } from 'next/router';

export default function Collection(
  {
     products
  }
) {
    console.log(products);
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* {products.map(({ node }) => (
        
      ))} */}
      {/* <ProductList products={products} />
    </div>
  );
}

export async function getStaticPaths() {
  const collections = await getCollections();
  console.log(collections);
  const paths = collections.map((collection) => ({
    params: { collection: String(collection.node.handle) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const products = await getProductsInCollection(params.collection);

  console.log(products);

  return {
    props: {
      products,
    },
  };
}
