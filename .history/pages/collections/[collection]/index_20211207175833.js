import Head from 'next/head';
import { getCollections, getProductsInCollection } from '../../../lib/shopify';
import ProductList from '../../../components/ProductList';
import { useRouter } from 'next/router';
import Link from 'next/link';
export default function Collection({ collection, products }) {
  // console.log('collection223123123', products);
  return (
    <div className=" flex-grow">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductList products={products} collection={collection} />
    </div>
  );
}

export async function getStaticPaths() {
  const collections = await getCollections();
  const paths = collections.map((collection) => ({
    params: { collection: String(collection.node.handle) },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // console.log('params collection', params);
  const products = await getProductsInCollection(params.collection);
  console.log("get products in collection", products);
  return {
    props: {
      collection: params.collection,
      products,
    },
  };
}
