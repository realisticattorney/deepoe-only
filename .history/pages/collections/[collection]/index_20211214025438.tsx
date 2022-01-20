import Head from 'next/head';
import { getCollections, getProductsInCollection } from '../../../lib/shopify';
import ProductList from '../../../components/ProductList';
import { GetStaticPropsContext } from 'next';

export interface AllCollections {
  node: {
    id: string;
    handle: string;
    title: string;
    description: string;
    image: {
      id: string;
      originalSrc: string;
    };
    products: {
      edges: {
        node: {
          images: {
            edges: {
              node: {
                originalSrc: string;
              };
            };
          };
        };
      };
    };
  };
}

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
  const collections: AllCollections[] = await getCollections();
  const paths = collections.map((collection) => ({
    params: { collection: String(collection.node.handle) },
  }));
  // console.log('paths', paths);
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ collection: string }>) => {
  const products = await getProductsInCollection(params?.collection);
  console.log('get products in collection', products);
  return {
    props: {
      collection: params?.collection,
      products,
    },
  };
};
