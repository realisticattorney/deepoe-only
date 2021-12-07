import Head from 'next/head';
import { getProductsInCollection } from '../lib/shopify';
import ProductList from '../components/ProductList';
import HomeCarousel from '../components/HomeCarousel';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
export default function Home({ products, carouselProducts }) {

  const [selectedItem, setSelectedItem] = useState(9);
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection('frontpage');

  let carouselProducts = [];
  products.products.edges.map((product) => {
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
