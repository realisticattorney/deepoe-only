import Head from 'next/head';
import { getCollections, getProductsInCollection } from '../../../lib/shopify';
import ProductList from '../../../components/ProductList';

export interfacer 


export interface ProductsProps {
  products: CollectionProducts;
  collection: string;
}

export interface CollectionProducts {
  title: string;
  image: {
    id: string;
    originalSrc: string;
  };
  products: {
    edges: Product[];
  };
}
export interface Product {
  node: {
    handle: string;
    title: string;
    id: string;
    images: {
      edges: ImagesEdges[];
    };
    priceRange: {
      minVariantPrice: {
        amount: string;
      };
    };
  };
}
export interface ImagesEdges {
  node: {
    originalSrc: string;
    altText: string | null;
  };
}

export default function Collection({ collection, products }: ProductsProps) {
  return (
    <div className="">
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
  console.log('COLLECTIONS', collections);
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
  console.log('get products in collection', products);
  return {
    props: {
      collection: params.collection,
      products,
    },
  };
}
