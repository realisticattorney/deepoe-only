import Head from 'next/head';
import { getProductsInCollection } from '../lib/shopify';
import ProductList from '../components/ProductList';
import HomeCarousel from '../components/HomeCarousel';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
export default function Home({ products }) {
  console.log(products.products.edges);

  const [selectedItem, setSelectedItem] = useState(1);
  console.log(selectedItem);
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full  overflow-hidden">
        <div className="relative h-64">
          <Image
            src={products.image.originalSrc}
            layout="fill"
            objectFit="cover"
          />
          <h2
            className={`text-3xl text-white absolute left-0 right-0 ml-auto mr-auto top-16 italic font-medium w-80 mb-6 text-center 
              `}
          >
            Considered materials, lively design.
          </h2>
          <a
            href={`https://deepoe-only.vercel.app/collections/frontpage`}
            rel="noreferrer"
          >
            <p className="text-white text-sm absolute  font-light text-center right-0 mr-auto mb-4 bottom-0 left-0 ml-auto w-40 underline font-mono">
              Shop All Products
            </p>
          </a>
        </div>
        <div className="px-6 my-6">
          <div className="w-full  overflow-hidden">
            <div className="relative h-110">
              <Image
                src="/newHome.png"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
              <div class="pt-2 flex items-center justify-center space-x-8">
                <button className="p-5" onClick={() => setSelectedItem(1)}>
                  <div class="relative w-6 h-6 font-thin  bg-opacity-60 bg-gray-700  font-mono rounded-full flex justify-center items-center text-center p-4 shadow-xl text-white">
                    1
                  </div>
                </button>
              </div>
              <div class="pt-20  flex items-center pl-28 justify-center space-x-8">
                <button className="p-5" onClick={() => setSelectedItem(2)}>
                  <div class="relative w-6 h-6 font-thin  bg-opacity-60 bg-gray-700  font-mono rounded-full flex justify-center items-center text-center p-4 shadow-xl text-white">
                    2
                  </div>
                </button>
              </div>
              <div class="pt-18 pr-36 flex items-center justify-center space-x-8">
                <button className="p-5" onClick={() => setSelectedItem(3)}>
                  <div class="relative w-6 h-6 font-thin  bg-opacity-60 bg-gray-700  font-mono rounded-full flex justify-center items-center text-center p-4 shadow-xl text-white">
                    3
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-center font-mono text-lg">Shop this table</h2>
        {/* <HomeCarousel products={products} selectedItem={selectedItem}  /> */}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection('frontpage');

  const carousel = products.products.edges.map((product) => {
    //get the first image
    const carouselProducts = []
    if (product.id === 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3MTExNjY2MzE5OTY=') {
      carouselProducts.push({number: 2, product: product.images.edges[0].node.originalSrc})
    }
    
    if (product.id === 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3MTExNjY2MzE5OTY=') {
      carouselProducts.push({number: 2, product: product.images.edges[0].node.originalSrc})
    }
    if (product.id === 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzY3MTExNjY2MzE5OTY=') {
      carouselProducts.push({number: 2, product: product.images.edges[0].node.originalSrc})
    }

  });

  return {
    props: { products },
  };
}
