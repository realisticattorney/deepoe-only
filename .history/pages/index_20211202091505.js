import Head from 'next/head';
import { getProductsInCollection } from '../lib/shopify';
import ProductList from '../components/ProductList';
import HomeCarousel from '../components/HomeCarousel';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
export default function Home({ products, carouselProducts }) {
  console.log('proooooooducts', products.products.edges);
  console.log("aaaaaa'", carouselProducts);

  const [selectedItem, setSelectedItem] = useState(1);
  console.log(selectedItem);
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full  overflow-hidden">
        <div className="relative h-65">
          <Image src="/heroHome.jpg" layout="fill" objectFit="cover" />
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
            <p className="text-white text-sm absolute  font-light text-center right-0 mr-auto mb-6 bottom-0 left-0 ml-auto w-40 underline font-mono">
              Shop All Products
            </p>
          </a>
        </div>
        <div className="px-6 my-6">
          <div className="relative  w-full">
            <Image
              src="/deepoeLandscape.png"
              layout="responsive"
              width={378}
              height={284}
              objectFit="contain"
            />

            <button
              className="absolute top-1/3 "
              onClick={() => setSelectedItem(1)}
            >
              <div className="w-6 h-6 font-thin  bg-opacity-60 bg-gray-700  font-mono rounded-full flex justify-center items-center text-center p-4 shadow-xl text-white">
                1
              </div>
            </button>
            {/*
            <div className="pt-20  flex items-center pl-28 justify-center space-x-8">
              <button className="p-5" onClick={() => setSelectedItem(2)}>
                <div className="absolute w-6 h-6 font-thin  bg-opacity-60 bg-gray-700  font-mono rounded-full flex justify-center items-center text-center p-4 shadow-xl text-white">
                  2
                </div>
              </button>
            </div>
            <div className="">
              <button className="p-5" onClick={() => setSelectedItem(3)}>
                <div className="absolute w-6 h-6 font-thin  bg-opacity-60 bg-gray-700  font-mono rounded-full flex justify-center items-center text-center p-4 shadow-xl text-white">
                  3
                </div>
              </button>
            </div> */}
          </div>
        </div>

        <h2 className="text-center font-mono text-xl -mt-1.5">
          Shop this table
        </h2>
        <HomeCarousel
          carouselProducts={carouselProducts}
          selectedItem={selectedItem}
        />

        <h2 className="text-center w-64 mx-auto font-light font-mono text-xl">
          We create and curate designs for your home and our shared one
        </h2>

        <div className="px-6 my-6 mt-10">
          <div className="w-full  overflow-hidden">
            <div className="relative h-110">
              <Image
                src="/people.png"
                layout="fill"
                objectFit="cover"
                objectPosition="top"
              />
            </div>
          </div>
        </div>
        <div className=" mx-6 mb-12">
          <h2 className="text-center w-full font-light leading-6  font-mono text-lg">
            At deepoe, we strive to create an open and honest experience for our
            customers. We recognize the challenges surrounding sustainability
            and are working daily to reduce our footprint.
          </h2>
          <div className="w-full text-center my-6">
            <Link href="/deepoe/about">
              <a className="text-deepoe_default-black font-mono underline w-full">
                About
              </a>
            </Link>
          </div>
        </div>
      </div>
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
  console.log('AAAAAAAAAAAAAAAAAAAA', carouselProducts);

  return {
    props: { products, carouselProducts },
  };
}
