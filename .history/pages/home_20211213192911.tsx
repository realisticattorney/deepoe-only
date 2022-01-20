import Head from 'next/head';
import { getProductsInCollection } from '../lib/shopify';
import ProductList from '../components/ProductList';
import HomeCarousel from '../components/HomeCarousel';
import Layout from '../components/Layout';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import HomeMain from '../components/HomeMain';

interface CarouselProduct {
  handle: string;
  number: number;
  product: string;
}

export interface HomeProps {
  products: ProductList;
  carouselProducts: any;
}

interface ProductList {
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

export default function Home({ products, carouselProducts }: HomeProps) {
  console.log('PRODUCTS HOME', products);
  console.log('CAROUSEL PRODUCTS HOME', carouselProducts);

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeMain products={products} carouselProducts={carouselProducts} />
    </div>
  );
}






export async function getStaticProps() {
  const products = await getProductsInCollection('frontpage');

  let carouselProducts: CarouselProduct[] = [];

  products.products.edges.map((product: Product) => {
    if (
      product.node.id === 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3MTExNjY2MzE5OTY='
    ) {
      carouselProducts[2] = {
        number: 2,
        product: product.node.images.edges[0].node.originalSrc,
        handle: product.node.handle,
      };
    }

    if (
      product.node.id === 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3MTExMzY1NTA5NzI='
    ) {
      carouselProducts[0] = {
        number: 3,
        product: product.node.images.edges[0].node.originalSrc,
        handle: product.node.handle,
      };
    }
    if (
      product.node.id === 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3MDgxMjg3NDM0ODQ='
    ) {
      carouselProducts[1] = {
        number: 1,
        product: product.node.images.edges[0].node.originalSrc,
        handle: product.node.handle,
      };
    }
  });

  return {
    props: { products, carouselProducts },
  };
}

Home.Layout = Layout;
